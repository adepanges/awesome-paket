"use strict";

import { Controller, Get, Req } from "@tsed/common";
import { Returns } from "@tsed/schema";

import Base from "./Base";
import { IRead } from "../interfaces/controllers/IRead";
import { IWrite } from "../interfaces/controllers/IWrite";

@Controller("/")
export default class Root extends Base implements IRead, IWrite {

    @Get()
    @Returns(200)
    home(@Req() req: Req): any {
        return {
            message: "Hai nice to meet you :D"
        };
    }
}
