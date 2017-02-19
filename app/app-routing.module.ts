import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './component/dashboard.component';
import {ProductComponent} from "./component/product.component";
import {ContactComponent} from "./component/contact.component";
import {ProductDetailComponent} from "./component/product-detail.component";

const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: DashboardComponent},
    {path: 'detail/:id', component: ProductDetailComponent},
    {path: 'products', component: ProductComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */