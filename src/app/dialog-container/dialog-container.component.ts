import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "./alert/alert.component";

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent {

  constructor(private dialog: MatDialog) {
  }

  onOpenDialog(): void {
    this.dialog.open(AlertComponent);
  }
}
