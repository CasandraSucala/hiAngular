import {NgModule} from "@angular/core";
import {CarsComponent} from "./cars.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import {CarComponent} from "./car/car.component";
import {CarService} from "./car.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CarRoutingModule} from "./car-routing.module";

@NgModule({
  declarations: [CarsComponent, CarEditComponent, CarComponent],
  providers: [CarService],
  imports: [CommonModule, ReactiveFormsModule, CarRoutingModule],
})
export class CarsModule {

}
