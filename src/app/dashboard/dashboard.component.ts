import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public routes = [
    {
      path: 'main',
      viewValue: 'Main'
    },
    {
      path: 'auth',
      viewValue: 'Auth'
    },
    {
      path: 'calendar',
      viewValue: 'Calendar'
    },
    {
      path: 'chat',
      viewValue: 'Chat'
    },
    {
      path: 'components',
      viewValue: 'Components'
    },
    {
      path: 'dragndrop',
      viewValue: 'Dragndrop'
    },
    {
      path: 'inbox',
      viewValue: 'Inbox'
    },
    {
      path: 'maps',
      viewValue: 'Maps'
    },
    {
      path: 'table',
      viewValue: 'Table'
    },
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public navigateTo(path: string): void{
    this.router.navigate(['/dashboard', path]);
  }
  public navigate(path: string): void {
    this.router.navigate([path]);
  }
}
