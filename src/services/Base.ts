import B from "bluebird";

import { Document } from "mongoose";

import { IRead } from "../interfaces/services/IRead";
import { IWrite } from "../interfaces/services/IWrite";
import { ObjectID } from "@tsed/mongoose";

export default class Base implements IRead<Document>, IWrite<Document> {

    public _defaultSort = "_id";
    public _defaultLimit = 10;
    public model: any;
    public preSave: any;
    public transformer: any = null;

    constructor(_options?: { defaultSort?: string; defaultLimit?: number }) {
        if (_options) {
            if (_options.defaultSort) this._defaultSort = _options.defaultSort;
            if (_options.defaultLimit)
                this._defaultLimit = _options.defaultLimit;
        }
    }

    count(conditions?: any) {
        conditions.is_deleted = false;
        return B.try(() => this.model.count(conditions || {}));
    }

    countActive(conditions?: any) {
        conditions.is_active = true;
        conditions.is_deleted = false;
        return B.try(() => this.model.count(conditions || {}));
    }

    findOneActive(conditions?: any, fields?: string, options?: any) {
        conditions.is_active = true;
        conditions.is_deleted = false;
        this.attachDefaultOptionsCriteria(options);
        return B.try(() =>
            this.model.findOne(conditions || {}, fields || "", options)
        )
            .then((document) =>
                this.transformer ? this.transformer([document]) : [document]
            )
            .then((documents) => documents && documents[0]);
    }

    findActive(conditions?: any, fields?: string, options?: any) {
        conditions.is_active = true;
        conditions.is_deleted = false;
        this.attachDefaultOptionsCriteria(options);
        return B.try(() =>
            this.model.find(conditions || {}, fields || "", options)
        ).then((documents) =>
            this.transformer ? this.transformer(documents) : documents
        );
    }

    find(conditions?: any, fields?: string, options?: any) {
        conditions.is_deleted = false;
        this.attachDefaultOptionsCriteria(options);
        return B.try(() =>
            this.model.find(conditions || {}, fields || "", options)
        ).then((documents) =>
            this.transformer ? this.transformer(documents) : documents
        );
    }

    findOne(conditions?: any, fields?: string, options?: any) {
        return B.try(() =>
            this.model.findOne(conditions || {}, fields || "", options)
        )
            .then((document) =>
                this.transformer ? this.transformer([document]) : [document]
            )
            .then((documents) => documents && documents[0]);
    }

    findById(_id: ObjectID, fields?: string, options?: any) {
        return B.try(() => this.model.findById(_id, fields || "", options))
            .then((document) =>
                this.transformer ? this.transformer([document]) : [document]
            )
            .then((documents) => documents && documents[0]);
    }

    create(document: any) {
        return B.try(() => {
            return this.preSave ? this.preSave(document) : document;
        }).then(() => new this.model(document).save());
    }

    update(conditions: any, document: Document | any) {
        return B.try(() => {
            return this.preSave ? this.preSave(document) : document;
        }).then(() => this.model.updateOne(conditions, document));
    }

    updateById(_id: ObjectID, document: Document | any) {
        return B.try(() => {
            return this.preSave ? this.preSave(document) : document;
        })
            .then(() => this.model.updateOne({ _id }, document))
            .then(() => ({
                ...document,
                _id,
            }));
    }

    delete(conditions: any) {
        return B.try(() =>
            this.model.updateOne(conditions, {
                is_active: false,
                is_deleted: true,
                deleted_at: new Date(),
            })
        );
    }

    deleteById(_id: ObjectID) {
        return B.try(() =>
            this.model.updateOne(
                { _id },
                { is_active: false, is_deleted: true, deleted_at: new Date() }
            )
        );
    }

    updateMany(conditions: any, document: any) {
        return B.try(() => this.model.updateMany(conditions, document));
    }

    deleteMany(conditions: any) {
        return B.try(() =>
            this.model.updateMany(conditions, {
                is_deleted: true,
                deleted_at: new Date(),
            })
        );
    }

    attachDefaultOptionsCriteria(options: any) {
        !options ? (options = {}) : null;
        options.sort = options.sort || this._defaultSort;
        options.skip = parseInt(options.skip) || 0;
        options.limit =
            typeof options.limit != "undefined"
                ? parseInt(options.limit)
                : this._defaultLimit;
    }
}