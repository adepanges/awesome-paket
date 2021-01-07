import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import SinonChai from "sinon-chai";

Chai.should();
Chai.use(SinonChai);
Chai.use(ChaiAsPromised);

(async () => {
    await global.__MONGOD__.stop();
})();

process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
    // application specific logging, throwing an error, or other logic here
});
