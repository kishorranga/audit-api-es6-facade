import { IResolver } from "../resolver/iresolver";

export interface IQuery
{
    queryVO():Object;
    resolver:IResolver;
    schema:any;
    arguments:any;
}