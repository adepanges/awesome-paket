import { ObjectID } from "@tsed/mongoose";

export interface IRefConnote {
    connote_id?: string;
    location_id?: ObjectID;
    connote_state_id?: number;
    transaction_id?: string;
    organization_id?: number;
    id_source_tariff?: string;
    connote_number?: number;
    connote_service?: string;
    connote_service_price?: number;
    connote_booking_code?: string;
    connote_amount?: number;
    connote_code?: string;
    number?: string;
    connote_order?: number;
    connote_state?: string;
    zone_code_from?: string;
    zone_code_to?: string;
    surcharge_amount?: null;
    actual_weight?: number;
    volume_weight?: number;
    chargeable_weight?: number;
    connote_total_package?: string;
    connote_surcharge_amount?: string;
    connote_sla_day?: string;
    source_tariff_db?: string;
    pod?: null;
    history?: Array<any>;
}