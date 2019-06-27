import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker.html'
})
export class NgbdDatepickerBasic {
  model: NgbDateStruct;
  date: {year: number, month: number};
}
