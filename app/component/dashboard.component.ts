import {Component, OnInit} from '@angular/core';

import {Item} from "../item";
import {LatestItemService} from "../service/latest-product.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'html/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    selectedItem:Item;
    items:Item[] = [];

    constructor(private router:Router, private latestItemService:LatestItemService) {
    }

    ngOnInit():void {
        this.latestItemService.getLatestItems()
            .then(items => this.items = items.slice(0,6));
    }

    onSelect(item:Item):void {
        this.selectedItem = item;
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedItem.id]);
    }
}


