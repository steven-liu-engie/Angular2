import {Injectable} from "angular2/core";
import {IProduct} from "./product";

import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class ProductService{
    private _productURL = "api/products/products.json"
    constructor(private _http:Http){}
    getProduct(): Observable<IProduct[]>
    {
        return this._http.get(this._productURL)
                   .map((response:Response) => <IProduct[]>response.json())
                   .do(data=>console.log("All"+JSON.stringify(data)))
                   .catch(this.handleError);
    }
    private  handleError(error:Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}