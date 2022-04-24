import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  public clicked: {[key: number]: boolean} = {};

  emails = [
    {
      name: "Kathy Hudson",
      text: "Exercitation duis aliqua nulla aliqua consequat nisi qui Lorem in duis.",
    },
    {
      name: "Stuart Velez",
      text: "Minim proident ex id tempor veniam pariatur.",
    },
    {
      name: "Dillon Bright",
      text: "Consectetur ipsum dolor ullamco ut exercitation aliqua labore do ea ea dolore irure.",
    },
    {
      name: "Leona Cruz",
      text: "Anim pariatur amet qui tempor aliquip dolore ut nostrud mollit deserunt esse.",
    },
    {
      name: "Patel Herman",
      text: "Laboris exercitation ea do culpa aute non id nostrud dolor laborum duis eiusmod.",
    },{
      name: "Monroe Jensen",
      text: "Anim pariatur amet qui tempor aliquip dolore ut nostrud mollit deserunt esse.",
    },{
      name: "Schneider Mcmahon",
      text: "Laborum proident exercitation labore commodo amet irure id quis ea officia sit elit",
    },{
      name: "Olson Gould",
      text: "Laboris exercitation ea do culpa aute non id nostrud dolor laborum duis eiusmod",
    },
    {
      name: "Carmella Noble",
      text: "Minim proident ex id tempor veniam pariatur.",
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
  public changeId(i: number): void {
    this.clicked[i] = !this.clicked[i];
  }
}
