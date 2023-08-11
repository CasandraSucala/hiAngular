import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from './child/child.component';
import {UserComponent} from './user/user.component';
import {NamePipe} from "./pipes/name.pipe";
import {AgeDirective} from "./directives/age.directive";
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    UserComponent,
    NamePipe,
    AgeDirective,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
