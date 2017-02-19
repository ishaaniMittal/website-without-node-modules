import {Component, OnInit} from '@angular/core';
import {Item} from "../item";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'html/products.component.html'
})
export class ProductComponent implements OnInit {

    items:Item[] = [];
    selectedItem:Item;

    constructor(private router:Router,
                private productService:ProductService) {
    }

    ngOnInit():void {

        this.productService.getProducts()
            .then(items => this.items = items);
    }

    onSelect(item:Item):void {
        this.selectedItem = item;
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedItem.id]);
    }
}


