import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  helloMessage: string = 'Hello Angular! ^_^';
  title = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.data['isTitleNice']) {
      this.title = this.route.snapshot.title ??
        'Title not found';
    }
  }

  onClick(): void {
    this.helloMessage = 'Hi';
  }
}
