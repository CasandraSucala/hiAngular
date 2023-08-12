import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./car.model";

@Injectable({
  providedIn: "root"
})
export class CarService {
  private readonly url = "http://localhost:3000/cars/";

  constructor(private http: HttpClient) {
  }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  public saveCar(car: Car): Observable<unknown> {
    return this.http.post(this.url, car);
  }

  public updateCar(car: Car): Observable<unknown> {
    return this.http.put(this.url+`${car.id}`, car);
  }

  public deleteCar(carId: number): Observable<unknown> {
    return this.http.delete(this.url+`${carId}`);
  }
}
