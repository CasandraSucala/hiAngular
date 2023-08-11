import {Component, OnDestroy, OnInit, SkipSelf} from '@angular/core';
import {NotificationService} from "./notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [NotificationService]
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification: string = '';
  private subscription!: Subscription;

  constructor(@SkipSelf() private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.notification$.subscribe(
      (notification: string) => {
        console.log('Notified');
        this.notification = notification;
      });
  }

  onHideNotification(): void {
    this.notificationService.hideNotification();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNotify(): void {
    this.notificationService.showNotification('Notification from NotificationComponent');
  }
}
