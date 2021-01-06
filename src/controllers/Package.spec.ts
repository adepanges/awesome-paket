import { expect } from "chai";
import B from "bluebird"
import * as Sinon from "sinon";
import { TestMongooseContext } from "@tsed/testing-mongoose";
import { PlatformExpress } from "@tsed/platform-express";
import { PlatformTest, Req, Request } from "@tsed/common";
import Package from "../models/Package";
import PackageService from "../services/Package";
import PackageController from "./Package";
import Server from "../Server";


describe("PackageController", () => {
    beforeEach(PlatformTest.create);
    afterEach(PlatformTest.reset);

    describe(".find()", () => {
        it("should return a package", async () => {
            // GIVEN
            const data = new Package();
            data.transaction_id = "test";
            const service = {
                find: Sinon.stub().resolves(B.resolve([data])),
            };

            const packageController: PackageController = await PlatformTest.invoke(
                PackageController,
                [
                    {
                        token: PackageService,
                        use: service,
                    },
                ]
            );

            // WHEN
            const result = await packageController.find({ transaction_id: "test" });

            // THEN
            result.should.deep.equal(data);
            service.find.should.be.calledWithExactly({
                transaction_id: "test",
            });
        });
    })
});
