import {Component, OnInit} from '@angular/core';
import {TitleService} from "./parent/title.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title$!: Observable<string>;

  constructor(public titleService: TitleService) {
  }

  ngOnInit(): void {
    this.title$ = this.titleService.title$;

    localStorage.setItem('role', 'admin');
  }
}
