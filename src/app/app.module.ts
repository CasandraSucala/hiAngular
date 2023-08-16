import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from './parent/child/child.component';
import {UserComponent} from './user/user.component';
import {NamePipe} from "./pipes/name.pipe";
import {AgeDirective} from "./directives/age.directive";
import {LanguagesComponent} from './languages/languages.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {AngularComponent} from './content-projection/angular/angular.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ContentProjectionComponent} from './content-projection/content-projection.component';
import {CarsModule} from "./cars/cars.module";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ParentComponent} from './parent/parent.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import {MyHttpInterceptor} from "./core/interceptors/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    UserComponent,
    NamePipe,
    AgeDirective,
    LanguagesComponent,
    ViewChildComponent,
    AngularComponent,
    LifecycleComponent,
    ContentProjectionComponent,
    PageNotFoundComponent,
    ParentComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
