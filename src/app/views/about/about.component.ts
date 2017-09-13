import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  experiences: any[];
  constructor() {
    this.experiences=[
      {
        name: 'Front-End developer',
        contract: 'Open-ended contracts - Safety Line', 
        date: 'Paris, from June 15 2014 to now.', 
        description: 'Impletations of templates & mockups for Web applications in a team of developers with Angular 2+, Ionic 3, Bootstrap, SASS...',
        bcolor: 'lightseagreen',
        tasks: [
          {
            label: 'Web development mostly with Angular 2+ & Bootstrap'
          },
          {
            label: 'Implementation of forms in HTML/CSS/Javascript'
          }
        ]
      },
      {
        name: 'Webdesign & infographics',
        contract: 'Traineeship - CTAI pôle d’innovation TIC et multimédia',
        date: 'Alsace (France), from April 2 to June 8, 2013.',
        description: 'Design and production of multimedia products.',
        bcolor: 'indianred',
        tasks: [
          {
            label: 'Creation of mockups with Photoshop'
          },
          {
            label: 'Static implementations of mockups in HTML/CSS'
          }
        ]
      },
      {
        name: 'Webdesign',
        contract: 'Traineeship - Anna Conseil en Communication',
        date: 'Alsace (France), from June 14 to June 28, 2012.',
        description: 'Photo editing and update of the newsletters.',
        bcolor: 'gold',
        tasks: [
          {
            label: 'Learning'
          }
        ]
      },
    ]
  }

  ngOnInit() {
  }

}
