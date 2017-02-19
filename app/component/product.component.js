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
var product_service_1 = require("../service/product.service");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.items = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .then(function (items) { return _this.items = items; });
    };
    ProductComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ProductComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'html/products.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map