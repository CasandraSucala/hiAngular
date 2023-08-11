import {Component} from '@angular/core';
import {NotificationService} from "./notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello Angular';

  constructor(private notificationService: NotificationService) {
  }

  onTitleChanged(newTitle: string): void {
    this.title = newTitle;
  }

  onNotify(): void {
    this.notificationService.showNotification('Notification from AppComponent');
  }
}
