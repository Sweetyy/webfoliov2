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
        name: 'Developer Front-End', 
        date: '2014 - Now', 
        description: 'Angular is a free and open-source Javascript structural framework for dynamic web apps. Developped by Google, it lets you use HTML as your template language and lets you extend HTML\'s syntax to express your application\'s components clearly and succinctly.',
        bcolor: 'lightseagreen',
        tasks: [
          {
            description: 'Design'
          },
          {
            description: 'Coding'
          }
        ]
      },
      {
        name: 'Student',
        date: '2009 - 2014',
        description: 'Angular is a free and open-source Javascript structural framework for dynamic web apps.',
        bcolor: 'siver',
        tasks: [
          {
            description: 'Learning'
          },
          {
            description: 'Homework'
          },
          {
            description: 'Cinema'
          },
          {
            description: 'Friend'
          }
        ]
      },      
    ]
  }

  ngOnInit() {
  }

}
