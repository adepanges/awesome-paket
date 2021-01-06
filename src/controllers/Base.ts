import QueryHelper, { typeAccept } from "../helpers/Query";

export default class BaseController {
    generateInternalFilter(query: any, accepts?: typeAccept) {
        return QueryHelper.generateQueryFilter(query, accepts);
    }

    getPagination(query: any) {
        return QueryHelper.pagination(query);
    }
}