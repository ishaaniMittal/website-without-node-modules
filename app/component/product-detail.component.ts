import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import {ProductService} from "../service/product.service";
import {Item} from "../item";

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'html/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    item:Item;

    constructor(private route:ActivatedRoute,
                private location:Location,
                private productService:ProductService) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.productService.getProductItem(id)
                .then(item => this.item = item);
        });
    }

    goBack():void {
        this.location.back();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */