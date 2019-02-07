/***
 * Author : Kishor Ranga
 * licence : Open to use by anyone
 * Date: 7th Feb 2019, Pune / Wakad
 */
import { IResolver } from "../resolver/iresolver";

export interface IQuery
{
    queryVO():Object;
    resolver:IResolver;
    schema:any;
    arguments:any;
}