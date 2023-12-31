import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() appTitle!: string;
  @Output() titleChanged: EventEmitter<string> = new EventEmitter();

  onClick(newTitle: string): void {
    this.titleChanged.emit(newTitle);
  }
}
