import { ObjectID } from "@tsed/mongoose";

export interface IKoli {
    id: string;
    connote_id: string;
    formula_id: null;
    awb_url: string;
    chargeable_weight: number;
    width: number;
    surcharge: Array<any>;
    description: string;
    weight: number;
    height: number;
    length: number;
    volume: number;
    custom_field: any;
    code: string;
}

export interface IRefKoli {
    koli_id: string;
    awb_url: string;
    koli_chargeable_weight: any;
    koli_surcharge: Array<any>;
    koli_description: string;
    koli_formula_id: null;
    connote_id: string;
    koli_length: number;
    koli_width: number;
    koli_height: number;
    koli_weight: number;
    koli_volume: number;
    koli_custom_field: any;
    koli_code: string;
}