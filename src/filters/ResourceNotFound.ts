"use strict";

import { Inject, Catch, ExceptionFilterMethods, PlatformContext, ResourceNotFound } from "@tsed/common";

@Catch(ResourceNotFound)
export default class ResourceNotFoundFilter implements ExceptionFilterMethods {

    transform(data: any) {
        return data;
    }

    async catch(exception: ResourceNotFound, context: PlatformContext) {
        const { response } = context;

        const result = {
            success: false,
            status: exception.status,
            message: exception.message,
            url: exception.url
        };
        response.status(result.status).body(result);
    }
}