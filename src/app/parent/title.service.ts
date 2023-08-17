import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TitleService {
  private titleSub: BehaviorSubject<string> =
    new BehaviorSubject<string>('Hello World! ^_^');
  public title$ = this.titleSub.asObservable();

  public changeTitle(title: string): void {
    this.titleSub.next(title);
  }
}

