import {NgModule} from "@angular/core";
import {CarsComponent} from "./cars.component";
import {CarComponent} from "./car/car.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CarRoutingModule} from "./car-routing.module";
import {CarService} from "./car.service";
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [CarsComponent,
    CarComponent,
    CarEditComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarRoutingModule,
    MaterialModule
  ],
  providers: [CarService]
})
export class CarsModule {

}
