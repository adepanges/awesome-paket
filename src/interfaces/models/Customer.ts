import { ObjectID } from "@tsed/mongoose";

export enum JenisPelanggan {
    B2B = "B2B",
    B2C = "B2C",
}

export interface ICustomer {
    _id?: ObjectID;
    name: string;
    code: string;
    sales: string;
    top: string;
    jenis_pelanggan: JenisPelanggan;
    address: string;
    address_detail: string;
    zip_code: string;
    email: string;
    phone: string;
}

export interface IRefCustomerAttribute {
    nama_sales: string;
    TOP: string;
    jenis_pelanggan: JenisPelanggan;
}

export interface IRefCustomer {
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_phone: string;
    customer_address_detail: string;
    customer_zip_code: string;
}