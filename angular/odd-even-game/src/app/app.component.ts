import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'odd-even-game';
  counterValues = [];

  onCounterStop() {
    this.counterValues = [];
  }

  onCounterUpdated(counterData: { counter: number }) {
    this.counterValues.push(counterData.counter);
  }

  currentCounterValue() {
    if (this.counterValues.length == 0) {
      return 0;
    }
    return this.counterValues[this.counterValues.length - 1];
  }
}
