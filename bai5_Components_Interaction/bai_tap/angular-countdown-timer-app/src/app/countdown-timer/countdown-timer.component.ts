import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  message = '';
  remainingTime: number;
  @Input() secondsChild: number;
  @Output() finish = new EventEmitter();
  private intervalId = 0;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.reset();
  }

  stop() {
    this.clearTimer();
    this.message = `${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.secondsChild;
    this.message = `Click start button to start the Countdown`;
  }


  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.secondsChild;
    }
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.message = 'Finish CountDown!';
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
