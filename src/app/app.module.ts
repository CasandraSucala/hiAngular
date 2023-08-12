import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChildComponent} from './child/child.component';
import {UserComponent} from './user/user.component';
import {NamePipe} from "./pipes/name.pipe";
import {AgeDirective} from "./directives/age.directive";
import {LanguagesComponent} from './languages/languages.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {AngularComponent} from './content-projection/angular/angular.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {NotificationComponent} from "./notification/notification.component";
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from "./cars/car/car.component";
import {HttpClientModule} from "@angular/common/http";
import {CarEditComponent} from "./cars/car-edit/car-edit.component";
import { ContentProjectionComponent } from './content-projection/content-projection.component';

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
    NotificationComponent,
    CarsComponent,
    CarComponent,
    CarEditComponent,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
