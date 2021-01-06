import { expect } from "chai";
import B from "bluebird"
import * as Sinon from "sinon";
import { PlatformTest, Req } from "@tsed/common";
import PackageService from "./Package";
import PackageModel from "../models/Package";
import { Types } from "mongoose";

describe("PackageService", () => {
    beforeEach(PlatformTest.create);
    afterEach(PlatformTest.reset);

    it("Instace must be same", () => {
        const instance = PlatformTest.get<PackageService>(PackageService);
        // const instance = PlatformTest.invoke<PackageService>(PackageService); // get fresh instance
        expect(instance).to.be.instanceof(PackageService);
    });


    it("findOne should return promise",
        PlatformTest.inject(
            [PackageService],
            async (packageService: PackageService) => {
                const item = packageService.findOne({});
                expect(item).to.be.instanceOf(B);
            }
        )
    );

    it(
        "findById should return promise",
        PlatformTest.inject(
            [PackageService],
            async (packageService: PackageService) => {
                const objId = new Types.ObjectId();
                const item = packageService.findById(objId, "");
                expect(item).to.be.instanceOf(B);
            }
        )
    );

});
