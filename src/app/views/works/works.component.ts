import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html'
})
export class WorksComponent implements OnInit {

  works: any[];
  constructor(private router:Router) {
    this.works=[
      {
        name: 'SoundFlow',
        images: 'soundflow.png',
        link: '',
        description: 'Listen musics and watch movies of others in live and share yours! Realized in a team of 3 developpers.',
        technologies: '<b>Ionic 3, Angular 4, HTML, SASS</b>',
        inprogress: true
      },
      {
        name: 'Dailyrious',
        images: 'dailyrious.png', 
        link: 'http://dailyrious.net', 
        description: 'Paranormal Community. Different paranormal themes, mysterious and terrifying every day! Aliens, Dreams, Superhumans, Ghosts, Monsters, Magic and many others. Tell us your stories, share your experience and learn about others. Realized in team of 3 developers.',
        technologies: '<b>Angular 4, HTML, CSS</b>',
        inprogress: false
      },
      {
        name: 'Foodtrack',
        images: 'foodtrack.png',
        link: 'https://play.google.com/store/apps/details?id=com.ionicframework.final994902', 
        description: 'Hard to know what and where to eat with your colleagues or friends? Foodtrack is the application you need. Find the place you want to eat in three easy steps and visualize your final choice in Google Maps. Realized with a friend.',
        technologies: '<b>Angular 2, Ionic 2, HTML, CSS</b>',
        inprogress: false
      },
      {
        name: 'Just Square',
        images: 'justsquare.png',
        link: '',
        description: 'Just Square is an HTML5 based experience working with Socket.io and BabylonJS. It\'s an FPS WEBGL game that you can play directly in the browser. Once you choosed a username, you can join a room to play with others players or create your own to start your game whenever you want.',
        technologies: '<b>Socket, BabylonJS, HTML, CSS</b>',
        inprogress: false
      }
    ]
  }

  ngOnInit() {
  }

}
