import { ObjectID } from "@tsed/mongoose";

export enum TransactionState {
    "WAITING",
    "PAID"
}

export interface ITransaction {
    transaction_id?: string;
    location_id: ObjectID;
    customer_code?: string;
    customer_name?: string;
    transaction_amount?: number;
    transaction_discount?: number;
    transaction_additional_field?: string;
    transaction_payment_type?: string;
    transaction_state?: TransactionState | string;
    transaction_code?: string;
    transaction_order?: number;
    transaction_payment_type_name?: string;
    transaction_cash_amount?: number;
    transaction_cash_change?: number;
}