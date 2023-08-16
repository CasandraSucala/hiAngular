import { Component } from '@angular/core';
import {navItems} from "./navigator.model";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  readonly navItems = navItems;
}
