"use strict";

import { Inject, Injectable, Controller, BodyParams, PathParams, QueryParams, Req } from "@tsed/common";
import { Get, Put, Post, Delete } from "@tsed/common";
import { Returns } from "@tsed/schema";

import { ObjectID } from "@tsed/mongoose";

import BaseController from "./Base";
import Package from "../models/Package";
import PackageService from "../services/Package";

import { IRead } from "../interfaces/controllers/IRead";
import { IWrite } from "../interfaces/controllers/IWrite";

@Controller("/package")
@Injectable()
export default class PackageController
    extends BaseController
    implements IRead, IWrite {
    @Inject()
    service: PackageService;

    @Get()
    @(Returns(200, Array).Of(Package).ContentType("application/json"))
    async find(@QueryParams() query: any) {
        const { fields, skip, limit, sort } = this.getPagination(query);
        const filter = {};
        return await this.service.find(filter, fields, { skip, limit, sort });
    }

    @Post()
    @(Returns(200, Package).ContentType("application/json"))
    async create(@BodyParams() payload: Package) {
        return await this.service.create(payload);
    }

    @Put("/:id")
    @(Returns(200, Package).ContentType("application/json"))
    async updateById(
        @PathParams("id") id: ObjectID,
        @BodyParams() payload: Package
    ) {
        return await this.service.updateById(id, payload);
    }

    @Delete("/:id")
    @(Returns(200, Package).ContentType("application/json"))
    async deleteById(@PathParams("id") id: ObjectID) {
        return await this.service.deleteById(id);
    }

    @Get("/:id")
    @(Returns(200, Package).ContentType("application/json"))
    async findById(@PathParams("id") id: ObjectID, @QueryParams() query: any) {
        const { fields } = this.getPagination(query);
        return await this.service.find(id, fields);
    }
}
