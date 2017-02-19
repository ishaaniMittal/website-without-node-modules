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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n       <div class=\"banner-top\"> \n            <div class=\"container\"> \n                <nav class=\"navbar navbar-default\" role=\"navigation\"> \n                    <!--/.navbar-header-->                     \n           \n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"> \n                     \n                        <ul class=\"nav navbar-nav\"> \n                            <li>\n                               <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n                            </li>    \n                            <li>\n                               <a routerLink=\"/products\" routerLinkActive=\"active\">Products</a>\n                            </li> \n                             <li>\n                               <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n                            </li> \n                                                       \n                        </ul>                         \n                    </div>                     \n                    <!--/.navbar-collapse-->                     \n                </nav>                 \n                <!--/.navbar-->                 \n            </div>             \n        </div>       \n          \n           \n      \n    \n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=app.component.js.map