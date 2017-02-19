"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var latest_product_service_1 = require("../service/latest-product.service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router, latestItemService) {
        this.router = router;
        this.latestItemService = latestItemService;
        this.items = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latestItemService.getLatestItems()
            .then(function (items) { return _this.items = items.slice(0, 6); });
    };
    DashboardComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    DashboardComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'html/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, latest_product_service_1.LatestItemService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map