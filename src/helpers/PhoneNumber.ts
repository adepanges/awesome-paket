import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";
const PhoneUtil = PhoneNumberUtil.getInstance();
import { BadRequest } from "@tsed/exceptions";

const supportedCountry = ["ID", "US", "MY", "PH"];

function getPhoneE164(number: string, countryCode: string = "ID") {
    try {
        let phoneNoE164 = "";
        let flag = false;
        if (!countryCode || !supportedCountry.includes(countryCode))
            countryCode = "ID";
        for (let i = 0; i < supportedCountry.length; i++) {
            phoneNoE164 = PhoneUtil.format(
                PhoneUtil.parse(number, countryCode),
                PhoneNumberFormat.E164
            );
            if (PhoneUtil.isValidNumber(PhoneUtil.parse(phoneNoE164))) {
                flag = true;
            }
            if (flag) {
                break;
            }
        }

        if (!flag) {
            throw new BadRequest("INVALID PHONE NUMBER");
        }
        return phoneNoE164;
    } catch (error) {
        throw new BadRequest("INVALID PHONE NUMBER");
    }
}

function getPhoneBasic(number: string) {
    const basicPhone = String(PhoneUtil.parse(number, "ID"));
    return basicPhone;
}

export default {
    getPhoneE164,
    getPhoneBasic,
};