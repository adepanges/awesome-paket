import B from "bluebird";

import { Inject, Service, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";

import Base from "./Base";
import Package from "../models/Package";

@Service()
@Injectable()
export default class PackageService extends Base {
    @Inject(Package)
    model: MongooseModel<Package>;

    preSave = (document: Package) => {
        // do any before data not yet saved to elaborate other models
        return document;
    };
}