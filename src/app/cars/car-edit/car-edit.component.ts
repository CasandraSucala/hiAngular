import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "../car.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, first, take} from "rxjs";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent {
  @Input()
  public get car(): Car | null {
    return this._car;
  }

  public set car(car: Car | null) {
    this._car = car;
    // If another car is clicked, we need to refresh the view, we can do this by updating our form group
    // Note. We will also obtain the new car's value by implementing OnChanges interface,
    //    ngOnChanges -  is called after Angular sets or resets data-bound input properties.
    if (car) {
      this.formGroup.patchValue(this.car!);
      return;
    }
    this.formGroup.reset();
  }

  _car!: Car | null;

  @Output() editCanceled: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitted: EventEmitter<Car> = new EventEmitter<Car>();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      make: ['', Validators.required],
      model: '',
      color: '',
      year: '',
      price: ''
    });

    this.formGroup.controls['model'].valueChanges.pipe(
      filter(res => !!res),
      take(7),
      debounceTime(2000),
      distinctUntilChanged())
      .subscribe((changes) => {
        console.log(changes);
      });
  }

  onCancel(): void {
    this.editCanceled.emit();
  }

  onSubmit(): void {
    this.submitted.emit({...this.formGroup.value, id: this.car?.id});
  }
}
