import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
       <div class="banner-top"> 
            <div class="container"> 
                <nav class="navbar navbar-default" role="navigation"> 
                    <!--/.navbar-header-->                     
           
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> 
                     
                        <ul class="nav navbar-nav"> 
                            <li>
                               <a routerLink="/home" routerLinkActive="active">Home</a>
                            </li>    
                            <li>
                               <a routerLink="/products" routerLinkActive="active">Products</a>
                            </li> 
                             <li>
                               <a routerLink="/contact" routerLinkActive="active">Contact</a>
                            </li> 
                                                       
                        </ul>                         
                    </div>                     
                    <!--/.navbar-collapse-->                     
                </nav>                 
                <!--/.navbar-->                 
            </div>             
        </div>       
          
           
      
    
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
    
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */