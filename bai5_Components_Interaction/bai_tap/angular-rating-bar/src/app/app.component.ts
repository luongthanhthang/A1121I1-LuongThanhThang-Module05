import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';
  currentValue: number = 5;

  rateChange(rateChange: number) {
    this.currentValue = rateChange;
  }
}
