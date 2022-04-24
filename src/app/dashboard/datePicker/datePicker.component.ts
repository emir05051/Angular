import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datePicker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.css']
})
export class DatePickerComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    setTimeout(() => {
      const watermark = document.getElementsByTagName("a");
      watermark[1].remove()
    }, 1100)

  }
}
