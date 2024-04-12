import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss',
})
export class GameControlComponent {
  @Output() onGameButtonsHandled = new EventEmitter<boolean>();
  startGame() {
    this.onGameButtonsHandled.emit(true);
  }
  pauseGame() {
    this.onGameButtonsHandled.emit(false);
  }
}
