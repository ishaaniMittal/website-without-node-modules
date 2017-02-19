import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent}         from './component/app.component';
import {DashboardComponent}   from './component/dashboard.component';
import {ContactComponent} from "./component/contact.component";
import {ProductComponent} from "./component/product.component";
import {LatestItemService} from "./service/latest-product.service";
import {ProductService} from "./service/product.service";
import {ProductDetailComponent} from "./component/product-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        ProductDetailComponent,
        ContactComponent
    ],
    providers: [LatestItemService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
