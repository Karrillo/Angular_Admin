import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() legend: string = 'Legend';
  @Input() percentage: number = 50;

  @Output() value: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue( value: number ) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }

    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }

    this.percentage = this.percentage + value;
    this.value.emit(this.percentage);
  }

  onChange( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('percentage')[0];

    if (newValue >= 100) {
      this.percentage = 100;
    } else if ( newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    // elemHTML.value = Number(this.percentage);
    // Get value on HTML with js
    this.txtProgress.nativeElement.value = this.percentage;

    this.value.emit(this.percentage);
    // Focus
    this.txtProgress.nativeElement.focus();
  }

}
