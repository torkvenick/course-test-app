import { Component } from '@angular/core';

@Component({
  selector: 'app-section-7',
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.scss',
})
export class Section7Component {
  numbers = [1, 2, 3, 4, 5];
  oddNums = [1, 3, 5];
  evenNums = [2, 4, 6];
  onlyOdd = false;
  value = 10;
}
