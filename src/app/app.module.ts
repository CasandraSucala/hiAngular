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
import {ContentProjectionComponent} from './content-projection/content-projection.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ParentComponent} from './parent/parent.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { AlertComponent } from './dialog-container/alert/alert.component';

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
    NavigatorComponent,
    DialogContainerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
