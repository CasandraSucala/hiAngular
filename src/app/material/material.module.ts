import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {
}
