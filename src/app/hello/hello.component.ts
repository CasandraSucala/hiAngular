import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  helloMessage: string = 'Hello Angular! ^_^';

  onClick(): void {
    this.helloMessage = 'Hi';
  }
}
