import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  helloMessage: string = 'Hello Angular! ^_^';
  title: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;

    if (snapshot.data['hasNiceTitle']) {
      this.title = snapshot.title ?? 'No title found';
    }
  }

  onClick(): void {
    this.helloMessage = 'Hi';
  }

}
