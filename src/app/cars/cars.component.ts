import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {Car} from "./car.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars$!: Observable<Car[]>;
  isEditMode: boolean = false;
  selectedCar: Car | null = null;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.cars$ = this.carService.getCars();
  }

  private getCars(): void {
    this.cars$ = this.carService.getCars();
  }

  private addCar(car: Car): void {
    this.carService.saveCar(car).subscribe(() => this.getCars());
  }

  updateCar(car: Car): void {
    this.carService.updateCar(car).subscribe(() => this.getCars());
  }

  onAddCar(): void {
    this.isEditMode = true;
    this.selectedCar = null;
  }

  onDeleteCar(id: number | undefined): void {
    if (!id) return;
    this.carService.deleteCar(id).subscribe(() => this.getCars());
  }

  onCarClick(car: Car): void {
    this.isEditMode = true;
    this.selectedCar = {...car};
  }

  private closeEditMode(): void {
    this.isEditMode = false;
    this.selectedCar = null;
  }

  onSubmit(car: Car): void {
    if (car.id) {
      this.updateCar(car);
    } else {
      this.addCar(car);
    }
    this.closeEditMode();
  }

  onEditCanceled(): void {
    this.closeEditMode();
  }
}
