import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private notificationSub: Subject<string> = new Subject<string>();
  public notification$ = this.notificationSub.asObservable();

  public showNotification(notification: string): void {
    this.notificationSub.next(notification);
  }

  public hideNotification(): void {
    this.notificationSub.next('');
  }
}
