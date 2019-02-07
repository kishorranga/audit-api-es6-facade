import { IResolver } from "./iresolver";


export class ProductResolver implements IResolver
{
    fetch(param:any)
    {
        let { productId } = param; 
        return [1,4,6,567,7,768,777,5656,3434,222];
    }
}