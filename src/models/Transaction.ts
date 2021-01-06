/**
 * @author Ade Pangestu
 **/
"use strict";

import { Property } from "@tsed/schema";
import { ObjectID, PreHook, Schema } from "@tsed/mongoose";
import { Default, Enum, Maximum, MaxLength, Minimum, Required } from "@tsed/schema";

import { ITransaction, TransactionState } from "../interfaces/models/Transaction";
import { IRefCustomer, IRefCustomerAttribute } from "../interfaces/models/Customer";

import { Base } from "./Base";

@Schema()
export class RefTransaction extends Base implements ITransaction {
    @Property()
    @Required()
    transaction_id?: string;

    @Property()
    @Required()
    location_id: ObjectID;

    @Property()
    customer_code?: string;

    @Property()
    customer_name?: string;

    @Property()
    @Required()
    transaction_amount?: number;

    @Property()
    transaction_discount?: number;

    @Property()
    transaction_additional_field?: string;

    @Property()
    transaction_payment_type?: string;

    @Property()
    @Enum(TransactionState)
    transaction_state?: TransactionState | string;

    @Property()
    transaction_code?: string;

    @Property()
    transaction_order?: number;

    @Property()
    transaction_payment_type_name?: string;

    @Property()
    transaction_cash_amount?: number;

    @Property()
    transaction_cash_change?: number;
}
