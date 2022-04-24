import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public photos: string[] = [];
  private numbers: number[] = [1, 3, 4, 10, 19];

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
      text: "Laborum proident exercitation labore  officia sit elit",
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
    for(let i = 0; i < 9; i++){
      this.photos.push('../../../../assets/chat/' + this.numbers[this.getRandomInt(5)] + '.jpg');
    }
  }
  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
