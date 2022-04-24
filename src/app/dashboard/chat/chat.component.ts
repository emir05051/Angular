import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public user_source: string = '../../../assets/chat/3.jpg';
  public your_source: string = '../../../assets/chat/1.jpg';

  public usersData = [
    {
      name: 'Dolores Rojas',
      description: 'ad duis ex',
      img: '../../../assets/chat/3.jpg',
    },
    {
      name: 'Lila Wade',
      description: 'in nostrud anim',
      img: '../../../assets/chat/4.jpg',
    },
    {
      name: 'Frieda Robbins',
      description: 'officia excepteur elit',
      img: '../../../assets/chat/10.jpg',
    },
    {
      name: 'Lorena Aguirre',
      description: 'consectetur dolor ea',
      img: '../../../assets/chat/19.jpg',
    }
  ]
  public user_replics = [
    {
      replic: 'Hey David! How\'s it going?',
      img: this.user_source,
      chat: 'friend',
    },
    {
      replic: 'You wanted to go golfing you remember? What about this weekend?\n',
      img: this.user_source,
      chat: 'friend',
    },
    {
      replic: 'Hey! I\'m good. Sure, let\'s meet on Saturday at the golf club, okay?\n',
      img: this.your_source,
      chat: 'you',
    },
    {
      replic: 'Sure thing! I hope we can finally beat our record this time. :)\n',
      img: this.user_source,
      chat: 'friend',
    },
    {
      replic: 'Awesome! We surely will. ;)\n',
      img: this.your_source,
      chat: 'you',
    },
    {
      replic: 'See you on Saturday!\n',
      img: this.your_source,
      chat: 'you',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
  public changeUser(image: string): void{
    this.user_source = image;
  }
}
