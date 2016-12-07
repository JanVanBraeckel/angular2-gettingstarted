import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _productService: ProductService) { }

    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            (product: IProduct) => this.product = product,
            error => this.errorMessage = <any>error)
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}