import { BadRequest } from "@tsed/exceptions";

const REG_USERNAME = /^[a-zA-Z0-9]+$/;

function isValid(username: string) {
    if (username && REG_USERNAME.test(username)) return true;
    else return false;
}

export default {
    isValid,
};