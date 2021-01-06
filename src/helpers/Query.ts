import MongoHelper from "../helpers/Mongo";
export type typeFilter = "string_regex" | "exact";
export type typeAccept = {
    [x: string]: typeFilter;
};

function generateQueryFilter(query: any, accepts?: typeAccept) {
    let queryFilter: any = {};
    const filter: any = {};

    if(query.filter) {
        try {
            queryFilter = JSON.parse(query.filter);
        } catch(err) {}
    }

    if (queryFilter) {
        if (queryFilter._id) filter._id = queryFilter._id;
        if (queryFilter.name)
            filter.name = MongoHelper.searchRegex(queryFilter.name);
        if (queryFilter.slug)
            filter.slug = MongoHelper.searchRegex(queryFilter.slug);

        ((accepts && Object.keys(accepts)) || []).map((key) => {
            const type = accepts[key];
            if (!queryFilter[key]) return;

            switch (type) {
                case "string_regex":
                    filter[key] = MongoHelper.searchRegex(queryFilter[key]);
                    break;
                default:
                    filter[key] = queryFilter[key];
                    break;
            }
        });
    }
    return { filter, queryFilter };
}

function pagination(query: any) {
    const fields = query.fields || "";
    const limit = query.limit || 10;
    const page = Number(query.page) || 1;
    const skip = query.skip || ((page-1) * limit) || 0;
    const sort = query.sort || "-is_active -updated_at";
    return { fields, page, skip, limit, sort };
}

export default {
    generateQueryFilter,
    pagination,
};
