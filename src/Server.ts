/**
  * @author Ade Pangestu
**/

"use strict";

import { Env } from "@tsed/core";
import { APP_PORT, SESSION_SECRET, ENVIRONMENT, MONGODB_URI, WHITELIST_ORIGIN } from "./Config";
import { Configuration, Inject, PlatformApplication, Constant } from "@tsed/common";
import { $log } from "@tsed/logger";
import "@tsed/mongoose";
import "@tsed/platform-express";
import "@tsed/swagger";
import * as Path from "path";
import bodyParser from "body-parser";
import compression from "compression";
import methodOverride from "method-override";
import helmet from "helmet";
import cors from "cors";

import HtmlResponseFilter from "./filters/HtmlResponse";
import JsonResponseFilter from "./filters/JsonResponse";
import HttpExceptionFilter from "./filters/HttpException";
import ErrorFilter from "./filters/Error";
import ResourceNotFoundFilter from "./filters/ResourceNotFound";

import GlobalAcceptMime from "./middlewares/GlobalAcceptMimes";
import QueryCriteria from "./middlewares/QueryCriteria";

import Routes from "./Routes";

$log.level = "debug";
$log.name = "AWESOME-PAKET";

const rootDir = Path.resolve(__dirname);
@Configuration({
    rootDir,
    env: ENVIRONMENT,
    port: APP_PORT,
    debug: false,
    logger: {
        debug: false,
        logRequest: true,
        requestFields: [
            "reqId",
            "method",
            "url",
            "headers",
            "query",
            "params",
            "duration",
        ],
    },
    mount: Routes,
    mongoose: [
        {
            id: "default",
            url: MONGODB_URI,
            connectionOptions: {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            },
        },
    ],
    responseFilters: [
        ResourceNotFoundFilter,
        ErrorFilter,
        HttpExceptionFilter,
        HtmlResponseFilter,
        JsonResponseFilter,
    ],
    acceptMimes: ["text/xml", "application/json", "json"],
    swagger: [
        {
            path: "/v2/docs",
            specVersion: "2.0",
        },
        {
            path: "/v3/docs",
            specVersion: "3.1.0",
        },
    ],
})
export default class Server {
    @Inject()
    app: PlatformApplication;

    @Configuration()
    settings: Configuration;

    @Constant("viewsDir")
    viewsDir: string;

    @Constant("env")
    env: Env;

    public $beforeRoutesInit(): void | Promise<any> {
        if (this.env === Env.PROD) {
            // do something
        }

        this.app
            .use(
                cors({
                    credentials: true,
                    origin: function (origin: any, callback: any) {
                        if (!origin || WHITELIST_ORIGIN.includes(origin)) {
                            callback(null, true);
                        } else {
                            callback(new Error("Not allowed by CORS"));
                        }
                    },
                })
            )
            .use(helmet())
            .use(compression())
            .use(methodOverride())
            .use(bodyParser.json())
            .use(
                bodyParser.urlencoded({
                    extended: true,
                })
            );

        this.app.use(GlobalAcceptMime);
        this.app.use(QueryCriteria);
        return null;
    }

    $afterRoutesInit(): void | Promise<any> {
        // do anything
    }
}