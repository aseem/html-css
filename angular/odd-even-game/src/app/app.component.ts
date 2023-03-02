import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'odd-even-game';
  gameCounterValue = 0;

  onCounterStop() {
    this.gameCounterValue = 0;
  }

  onCounterUpdated(counterData: { counter: number }) {
    this.gameCounterValue = counterData.counter;
  }
}
