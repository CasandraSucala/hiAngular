import {ResolveFn, Router} from "@angular/router";
import {Car} from "../../cars/car.model";
import {CarService} from "../../cars/car.service";
import {inject} from "@angular/core";
import {catchError, EMPTY} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

export const resolveCar: ResolveFn<Car> = (route) => {
  const carService = inject(CarService);
  const router = inject(Router);
  const selectedCarId = route.params['id'];
  const snackBar = inject(MatSnackBar);

  return carService.getCarById(selectedCarId).pipe(
    catchError((err) => {
      snackBar.open(
        err.name, 'ok', {duration: 3000}
      );
      router.navigateByUrl('/http');
    return EMPTY;
  }));
}
