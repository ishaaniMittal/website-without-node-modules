/**
 * Created by imittal on 11/13/16.
 */
/**
 * Created by imittal on 11/6/16.
 */
import {Injectable} from '@angular/core';
import {Item} from "../item";
import {ITEMS} from "../mock.latest-products";

@Injectable()
export class ProductService {
    getProducts():Promise<Item[]> {
        return Promise.resolve(ITEMS);
    }

    getProductItem(id:number):Promise<Item> {
        return this.getProducts()
            .then(items => items.find(item => item.id === id));
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */