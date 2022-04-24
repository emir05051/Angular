import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DatePickerComponent} from "./datePicker.component";
import {SchedulerModule} from "smart-webcomponents-angular/scheduler";

const routes: Routes = [
  {
    path: '',
    component: DatePickerComponent,
  }
]

@NgModule({
  declarations: [DatePickerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SchedulerModule,
    ]
})
export class DatePickerModule { }
