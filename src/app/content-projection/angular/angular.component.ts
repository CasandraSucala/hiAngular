import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('text') textRef!: ElementRef;

  constructor() {
  /*  console.log('constructor - ContentChild undefined - textRef: ',
      this.textRef);*/
  }

  ngAfterContentInit(): void {
/*    console.log('ngAfterContentInit - ContentChild initial value set - text: ',
      this.textRef.nativeElement.textContent);*/
    this.textRef.nativeElement.textContent = '!Dirty text, the child has access to projected content';
  }

  ngAfterContentChecked(): void {
    /*   console.log('ngAfterContentChecked - ContentChild check value - text: ',
         this.textRef.nativeElement.textContent);*/
  }
}
