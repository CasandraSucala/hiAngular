import {AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html'
})
export class ViewChildComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('inputRef') inputElementRef!: ElementRef;
  name: string = '';

  constructor() {
    /*  console.log('constructor - ViewChild undefined - inputElementRef: ',
        this.inputElementRef);*/
  }

  ngAfterViewInit(): void {
    /*    console.log('ngAfterViewInit called - Respond after Angular initializes the component\'s views and child views: inputElementRef value: ',
          this.inputElementRef.nativeElement.value);*/
  }

  ngAfterViewChecked(): void {
    /*  console.log('ngAfterViewChecked called - Respond after Angular checks the component\'s views and child views inputElementRef value: ',
        this.inputElementRef.nativeElement.value);*/
  }
}
