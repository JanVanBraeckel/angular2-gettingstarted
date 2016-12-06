import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any> error
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(event: Event): void {
        this.pageTitle = `Product List: ${event}`;
    }
}