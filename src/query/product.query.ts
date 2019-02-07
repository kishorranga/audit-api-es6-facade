/***
 * Author : Kishor Ranga
 * licence : Open to use by anyone
 * Date: 7th Feb 2019, Pune / Wakad
 */

import { BaseQuery } from "./base.query";
import * as graphql from 'graphql';
import { IResolver } from '../resolver/iresolver';
import { ProductResolver } from "../resolver/product.resolver";


class ProductController extends BaseQuery
{
    constructor()
    {
        super();
        this._schemaType    = new graphql.GraphQLList(graphql.GraphQLInt);
        this._description   = "this is product query";
        this.schema         = graphql.GraphQLList;
        this.arguments      = {
            productId: {type: graphql.GraphQLInt, description : "product ID"}
        }
        this.resolver = new ProductResolver();
    }
}

export const productQuery = new ProductController().queryVO();