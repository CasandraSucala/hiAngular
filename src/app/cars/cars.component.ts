import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {Car} from "./car.model";
import {filter, Observable, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars$!: Observable<Car[]>;
  isEditMode: boolean = false;
  selectedCar: Car | null = null;

  constructor(private carService: CarService, private route: ActivatedRoute,
              private router: Router) {
  }



  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.isEditMode = fragment === 'new';
    });

    this.route.data.pipe(filter((res) => !!res['car']))
      .subscribe((data) => {
        this.selectedCar = data['car'];
        this.isEditMode = true;
      })

    this.getCars();
  }

  private getCars(): void {
    this.cars$ = this.carService.getCars();
  }

  private addCar(car: Car): void {
    this.carService.saveCar(car).subscribe(() => this.getCars());
  }

  updateCar(car: Car): void {
    this.carService.updateCar(car).subscribe();
  }

  onAddCar(): void {
    this.router.navigate(['/http'], {fragment: 'new'});
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

  trackCar(i: number, item: Car) {
    return item.id;
  }
}
