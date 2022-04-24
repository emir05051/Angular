import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardComponent} from "./dashboard.component";
import { TableComponent } from './table/table.component';
import { ChatComponent } from './chat/chat.component';
import { ComponentsComponent } from './components/components.component';
import { DragndropsComponent } from './dragndrops/dragndrops.component';
import { AuthComponent } from './auth/auth.component';

import {RouterModule, Routes} from "@angular/router";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'auth',
        component: AuthComponent,
      },
      {
        path: 'calendar',
        loadChildren: () => import('./datePicker/datePicker.module').then((m) => m.DatePickerModule)
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
      },
      {
        path: 'dragndrop',
        component: DragndropsComponent,
      },
      {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then((m) => m.InboxModule)
      },
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule)
      },
      {
        path: 'table',
        component: TableComponent,
      },
    ],

  }
]

@NgModule({
  declarations: [DashboardComponent, TableComponent, ChatComponent, DragndropsComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatButtonToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    DragDropModule,
    MatTableModule
  ]
})
export class DashboardModule { }
