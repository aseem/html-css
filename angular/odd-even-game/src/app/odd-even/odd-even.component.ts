import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css'],
})
export class OddEvenComponent implements OnInit {
  @Input() value: number;

  constructor() {}

  ngOnInit(): void {}
}
