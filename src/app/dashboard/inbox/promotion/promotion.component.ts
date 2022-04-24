import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  emails = [
    {
      name: "Mercedes Mcbride",
      text: "Exercitation duis aliqua nulla aliqua consequat nisi qui Lorem in duis.",
    },
    {
      name: "Mccray Chandler",
      text: "Minim proident ex id tempor veniam pariatur.",
    },
    {
      name: "Helena Thornton",
      text: "Consectetur ipsum dolor ullamco ut exercitation aliqua labore do ea ea dolore irure.",
    },
    {
      name: "Helena Thornton",
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

}
