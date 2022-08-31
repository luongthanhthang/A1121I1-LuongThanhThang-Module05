import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  max = 10;
  @Input()
  currentValueChild: number;

  @Output()
  rateChangeChild = new EventEmitter();

  ratingUnits: IRatingUnit[] = [];

  constructor() {
  }

  // Array.from chuyển thành array
  // _: bỏ qua tham số
  calculate(max, ratingValue) {
    // this.ratingUnits = Array.from({length: max},
    //   (_, index) => ({
    //     value: index + 1,
    //     active: index < ratingValue
    //   }));

    let ratingUnit: IRatingUnit;

    for (let i = 0; i < max; i++) {
      ratingUnit = {
        value: (i + 1),
        active: (i < ratingValue)
      };
      this.ratingUnits.push(ratingUnit);
    }
  }

  ngOnInit(): void {
    this.calculate(this.max, this.currentValueChild);
  }


  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = (idx < this.currentValueChild))
  }

  select(index) {
    this.currentValueChild = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = (idx < this.currentValueChild));
    this.rateChangeChild.emit(this.currentValueChild);
  }

  enter(index) {
    index++;
    this.ratingUnits.forEach((item, idx) => item.active = (idx < index));
  }
}
