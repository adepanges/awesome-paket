import { Constant, IMiddleware, Middleware, Req } from "@tsed/common";
import { NotAcceptable } from "@tsed/exceptions";

@Middleware()
export default class GlobalAcceptMimes implements IMiddleware {
    @Constant("acceptMimes")
    acceptMimes: string[];

    use(@Req() req: Req) {
        /*
        console.log("req.accepts", req.accepts);
        console.log("this.acceptMimes", this.acceptMimes);
        console.log("req.accepts(this.acceptMimes)", req.accepts(this.acceptMimes));
        console.log("req.headers", req.headers);
        */

        if (!req.accepts(this.acceptMimes) && req.headers.accept) {
            throw new NotAcceptable(
                "Accepted mimes are: " + this.acceptMimes.join(", ")
            );
        }
    }
}
