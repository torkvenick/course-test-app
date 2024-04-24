import { EventEmitter } from '@angular/core';

export class CounterService {
  counter = 0;
  public plusCount = new EventEmitter<number>();
  increment() {
    this.counter++;
    this.plusCount.emit(this.counter);
  }
}
