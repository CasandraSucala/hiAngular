import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsComponent} from "./cars.component";

const routes: Routes = [
  {
    path: ':id',
    component: CarsComponent
  },
  {
    path: '',
    component: CarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {

}
