import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MapsComponent} from "./maps.component";
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
  }
]

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
  ]
})
export class MapsModule { }
