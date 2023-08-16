import {Component} from '@angular/core';
import {TitleService} from "../core/title.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  title$: Observable<string>;

  constructor(private titleService: TitleService) {
    this.title$ = titleService.title$;
  }

  onTitleChanged(newTitle: string) {
    this.titleService.changeTitle(newTitle)
  }
}
