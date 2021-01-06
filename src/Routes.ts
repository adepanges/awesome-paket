import Root from "./controllers/Root";
import PackageController from "./controllers/Package";

const Routes = {
    "/": [Root, PackageController],
};

export default Routes;
