import { Component } from '@angular/core';
import { DateInfoService } from './dateinfo.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DateInfoService]

})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;
  year:string;
  day:string;
  month:string;
  dateInfo: string;
  yearInfo: string;
  errorMessage: string;

  constructor(private _ateInfoService: DateInfoService) {
        this.options = new DatePickerOptions();
   }


  clickMe(event) {
    if(this.date == undefined){
      this.errorMessage = "please select your date";
      return;
    }
    this.year = this.date.year;
    this.day = this.date.day;
    this.month = this.date.month;

    this._ateInfoService.getDateInfo(this.day, this.month)
      .subscribe(
      data => this.dateInfo = data,
      error => this.errorMessage = <any>error);

    this._ateInfoService.getYearInfo(this.year)
      .subscribe(
      data => this.yearInfo = data,
      error => this.errorMessage = <any>error);
  }

}
