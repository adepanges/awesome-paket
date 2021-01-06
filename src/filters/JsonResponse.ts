"use strict";

import { ResponseFilter, Context, ResponseFilterMethods } from "@tsed/common";

@ResponseFilter("application/json")
export default class JsonResponseFilter implements ResponseFilterMethods {
    transform(data: any, context: Context) {
        return {
            success: true,
            data: typeof data != "string" ? data : [],
        };
    }
}