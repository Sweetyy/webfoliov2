import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: any[];
  constructor() {
    this.skills=[
      {name: 'Angular 2', images: 'angular_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'},
      {name: 'CSS3', images: 'css3_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'},
      {name: 'HTML5', images: 'html5_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'},
      {name: 'Responsive web design', images: 'responsive_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'},
      {name: 'Javascript', images: 'js_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'},
      {name: 'Git', images: 'git_shadow.png', description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'}
    ]
  }

  ngOnInit() {
  }

}
