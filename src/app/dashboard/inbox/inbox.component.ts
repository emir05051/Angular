import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public navigateTo(path: string): void{
    this.router.navigate(['dashboard/inbox/', path])
  }
}
