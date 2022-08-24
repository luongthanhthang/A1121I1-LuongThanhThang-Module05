import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = 0;
  number1: number = 0;
  number2: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  calculate(num1: string, num2: string, cal: string) {
    this.result = 0;
    this.number1 = parseInt(num1);
    this.number2 = parseInt(num2);

    if (num1 == "" || num2 == "") {
      this.result = 0;
    } else {
      switch (cal) {
        case '+': {
          this.result = this.number1 + this.number2;
          break;
        }
        case '-': {
          this.result = this.number1 - this.number2;
          break;
        }
        case '*': {
          this.result = this.number1 * this.number2;
          break;
        }
        case '/': {
          this.result = this.number1 / this.number2;
          break;
        }
      }
    }


  }
}
