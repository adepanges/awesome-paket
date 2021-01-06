import { ObjectID } from "@tsed/mongoose";

import { ILocation } from "./Location";

export interface IPackage {
    transaction_id: string;
    organization_id: number;
    custom_field?: any;
    koli_data?: Array<any>;
    currentLocation?: ILocation;
}