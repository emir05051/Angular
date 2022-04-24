import { Component, OnInit } from '@angular/core';
import {TableHttpService} from "./table-http.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {

  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'url'];

  constructor(private service: TableHttpService) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      console.log(res.data)
      this.dataSource = res.data.memes;
    });
  }
}
