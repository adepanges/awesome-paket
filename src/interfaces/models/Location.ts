import { ObjectID } from "@tsed/mongoose";

export interface ILocation {
    name: string;
    code: string;
    type: string;
}

export interface IRefLocation {
    location_id: ObjectID;
    location_name: string;
    location_code?: string;
    location_type: string;
}

export interface ICustomerLocation {
    location_id: ObjectID;
    organization_id: number;
    customer_name: string;
    zone_code: string;
}