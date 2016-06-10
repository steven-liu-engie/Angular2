import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
@Component(
    {
        templateUrl:"app/products/product-detail.component.html"
    }
)
export class ProductDetailComponent{
    constructor(private _routeParams: RouteParams,
                private _router:Router){
        let id = +this._routeParams.get("id");
        this.pageTitle += `: ${id}`;
    }

    pageTitle: string= "Product Details";

    onBack():void{
        this._router.navigate(["Products"]);
    }
}