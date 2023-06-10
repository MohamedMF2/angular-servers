import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('intervalFired') intervalFired = new EventEmitter();
  @Output('gameStop') gameStop = new EventEmitter();

  lastNumber: number = 0;
  interval!: any;

  constructor() { }

  ngOnInit(): void {
  }

  OnStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++
    }, 1000);
  }

  stopGame() {
    this.gameStop.emit(clearInterval(this.interval))
  };

}
