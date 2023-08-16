import {Car} from "../../cars/car.model";
import {ResolveFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {CarService} from "../../cars/car.service";
import {catchError, EMPTY} from "rxjs";

export const resolveCar: ResolveFn<Car> = (route) => {
  const carService = inject(CarService);
  const router = inject(Router);

  return carService.getCarById(route.params['id']).pipe(catchError(() => {
    router.navigateByUrl('/http');
    return EMPTY;
  }));
}


