import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  counter: number = 0;
  counterStarted: boolean = false;
  counterInterval;

  @Output() counterUpdated = new EventEmitter<{
    counter: number;
  }>();
  @Output() counterStopped = new EventEmitter<{}>();

  constructor() {}

  ngOnInit(): void {}

  onStartCounter() {
    this.counterStarted = true;
    console.log('Counter Started!');
    this.counterInterval = setInterval(() => {
      this.counter++;
      this.counterUpdated.emit({
        counter: this.counter,
      });
      console.log(this.counter);
    }, 1000);
  }

  onStopCounter() {
    this.counterStarted = false;
    this.counter = 0;
    console.log('Counter Stopped!');
    clearInterval(this.counterInterval);
    this.counterStopped.emit({});
  }
}
