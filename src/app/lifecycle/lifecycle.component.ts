import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() title!: string;

  constructor() {
    console.log('LifecycleComponent: constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LifecycleComponent: ngOnChanges called - Respond when Angular sets or resets data-bound input properties');
  }

  ngOnInit(): void {
    console.log('LifecycleComponent: ngOnInit called -  A good place for a component to fetch its initial data');
  }

  ngDoCheck(): void {
    console.log('LifecycleComponent: ngDoCheck called - Implementation here must be extremely lightweight or the user experience suffers');
  }

  ngAfterContentInit(): void {
    console.log('LifecycleComponent: ngAfterContentInit called - Respond after the parent projects content into the component\'s view');
  }

  ngAfterContentChecked(): void {
    console.log('LifecycleComponent: ngAfterContentChecked called - Respond after Angular checks the content projected ');
  }

  ngAfterViewInit(): void {
    console.log('LifecycleComponent: ngAfterViewInit called - Respond after Angular initializes the component\'s views and child views');
  }


  ngAfterViewChecked(): void {
    console.log('LifecycleComponent: ngAfterViewChecked called - Respond after Angular checks the component\'s views and child views');
  }

  ngOnDestroy(): void {
    console.log('LifecycleComponent: ngOnDestroy called - Called just before Angular destroys the component');
  }
}
