import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import { NgxChartsModule }from '@swimlane/ngx-charts'
import {MatButtonModule} from "@angular/material/button";
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    MatButtonModule
  ]
})
export class MainModule { }
