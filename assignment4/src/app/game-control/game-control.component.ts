import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEmitter = new EventEmitter<number>();
  n = 1;
  timeout: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void { }

  onGameStart(): void {
    this.timeout = setInterval(() => {
      this.numberEmitter.emit(this.n);
      this.n++;
    }, 1000);
  }

  onGameStop(): void {
    clearInterval(this.timeout);
  }

}
