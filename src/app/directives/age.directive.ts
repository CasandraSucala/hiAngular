import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: '[age]'
})
export class AgeDirective {

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('keydown', ['$event']) onKeyUp(keyEvent: KeyboardEvent): void {
    if (keyEvent.key === 'Backspace') return;

    if (isNaN(+keyEvent.key)) {
      keyEvent.preventDefault();
      return;
    }

    const age: number = +(this.elementRef.nativeElement.value + keyEvent.key);
    if (age > 200) {
      keyEvent.preventDefault();
    }
  }
}
