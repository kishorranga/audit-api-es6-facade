
import * as graphql from 'graphql';
import { productQuery } from '../query/product.query';
import graphHTTP = require('express-graphql');


class GraphQLController  
{
    graphQLQuery:any;   
    constructor()
    {
        this.graphQLQuery  = new graphql.GraphQLObjectType({
            name: "Query",
            fields: ():any=>{
                return {
                    getProductList: productQuery
                }
            }
        });   
    }

    setup():any {
        const app_schema = new graphql.GraphQLSchema({
            query: this.graphQLQuery
        });

        return graphHTTP({ 
            schema: app_schema, 
            graphiql: true 
        })
    }

    public static init(){
        return new GraphQLController().setup();
    }
}

export default GraphQLController;  