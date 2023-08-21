import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsComponent} from "./cars.component";
import {resolveCar} from "../core/resolvers/car.resolver";

const routes: Routes = [
  {
    path: ':id',
    component: CarsComponent,
    resolve: {car: resolveCar},
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
