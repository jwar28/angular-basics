import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title : string = 'CounterApp';
  number: number = 0;
  base  : number = 5;

  accumulate(value: number) {
    this.number += value;
  }
}
