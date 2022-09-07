import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-countdown-timer-app';
  seconds = 10;
  mess = '';

  finishCountDown(event: any) {
    if (event) {
      this.mess = 'happy new year';
    }
  }
}
