/***
 * Author : Kishor Ranga
 * licence : Open to use by anyone
 * Date: 7th Feb 2019, Pune / Wakad
 */
import * as graphql from 'graphql';

import { IQuery } from "./iquery";
import { IResolver } from "../resolver/iresolver";


export class BaseQuery implements IQuery {
    private _resolver: any;
    private _schema: any;
    private _args: any;
    protected _description: string = '';
    protected _schemaType: any;

    constructor() {

    }

     get resolver(): IResolver {
        return this._resolver;
    }

     set resolver(val: IResolver) {
        this._resolver = val;
    }

     get schema(): any {
        return this._schema;
    }

     set schema(val: any) {
        this._schema = val;
    }

     get arguments(): any {
        return this._args;
    }

     set arguments(val: any) {
        this._args = val;
    }

    queryVO() :any{
        const queryVO: any = {
            type: this._schemaType,
            description: this._description,
            args: {
                ...this._args
            },
            schema: graphql.GraphQLList,
            resolve: (root:any, args:any) => {
                return this._resolver ? this._resolver.fetch(args) : null;
            }

        }
        return queryVO;
    }




}