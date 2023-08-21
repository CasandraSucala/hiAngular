import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() appTitle!: string;
  @Output() titleChanged: EventEmitter<string> = new EventEmitter();


  onClick(newTitle: string): void {
    this.titleChanged.emit(newTitle);
  }

  getTitle():string {
    console.log('getting title');
      return this.appTitle;
  }
}
