import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsComponent} from "./cars.component";
import {resolveCar} from "../core/resolvers/cars.resolver";

const routes: Routes = [
  {
    path: '',
    component: CarsComponent
  },
  {
    path: ':id',
    component: CarsComponent,
    resolve: {car: resolveCar}
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {

}
