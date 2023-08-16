import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HelloComponent} from "./hello/hello.component";
import {UserComponent} from "./user/user.component";
import {LanguagesComponent} from "./languages/languages.component";
import {ViewChildComponent} from "./view-child/view-child.component";
import {ContentProjectionComponent} from "./content-projection/content-projection.component";
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ParentComponent} from "./parent/parent.component";
import {canChangeTitle, canLoadCarsModule} from "./core/guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full'
  },
  {
    path: 'data-binding',
    component: HelloComponent,
    title: 'Data Binding Section',
    data: {hasNiceTitle: true}
  },
  {
    path: 'pipes',
    component: UserComponent
  },
  {
    path: 'directives',
    component: LanguagesComponent
  },
  {
    path: 'template-ref',
    component: ViewChildComponent
  },
  {
    path: 'content-projection',
    component: ContentProjectionComponent
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },
  {
    path: 'service',
    canActivate: [canChangeTitle],
    component: ParentComponent
  },
  {
    path: 'http',
    canMatch: [canLoadCarsModule],
    loadChildren: () => import('./cars/cars.module').then((m) => m.CarsModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
