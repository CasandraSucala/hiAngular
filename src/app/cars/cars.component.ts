import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {Car} from "./car.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars$!: Observable<Car[]>;
  isEditMode: boolean = false;
  selectedCar: Car | null = null;

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isEditMode = !!(params['edit'] && params['edit'] === 'true');
    });

    this.route.data.subscribe((response) => {
      const car = response['car'];
      if (car) {
        this.selectedCar = response['car'];
        this.isEditMode = true;
      }});

    this.cars$ = this.carService.getCars();
  }


  private getCars(): void {
    this.cars$ = this.carService.getCars();
  }

  private addCar(car: Car): void {
    this.carService.saveCar(car).subscribe();
  }

  updateCar(car: Car): void {
    this.carService.updateCar(car).subscribe();
  }

  onAddCar(): void {
    this.router.navigate(['/http'], {queryParams: {edit: true}});
  }

  onDeleteCar(id: number | undefined): void {
    if (!id) return;
    this.carService.deleteCar(id).subscribe(() => this.getCars());
  }

  private closeEditMode(): void {
    this.router.navigateByUrl('/http');
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
