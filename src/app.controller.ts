import express from 'express';
import GraphQLController from "./controller/graphql.controller";
import bodyParser = require('body-parser');


class ApplicationController
{
    public  app: express.Application
    constructor()
    {
       this.app = express();
       this.initialize();
    }

    private initialize()
    {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use("/demo-api",GraphQLController.init());
    }
}

export default new ApplicationController().app;