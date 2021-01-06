import B from "bluebird";
import { Context, IMiddleware, Middleware, Req, Next } from "@tsed/common";
import { Forbidden, BadRequest } from "@tsed/exceptions";

@Middleware()
export default class QueryCriteriaMiddleware implements IMiddleware {
    use(@Req() req: Req, @Next() next: Next) {
        const query: any = req.query || {};

        if (query.page != undefined) {
            query.page = parseInt(query.page);
            if (isNaN(query.page)) {
                throw new BadRequest("query paramater 'page' should be a valid number");
            }
        } else query.page = 1;

        if (query.limit !== undefined) {
            query.limit = parseInt(query.limit);
            if (isNaN(query.limit)) {
                throw new BadRequest("query paramater 'limit' should be a valid number");
            }
        }

        if (query.fields !== undefined)
            query.fields = query.fields.split(",").join(" ");
        else query.fields = "";

        query.skip = (query.page - 1) * query.limit || 0;

        req.query = query;
        next();
    }
}