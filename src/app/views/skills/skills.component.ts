import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: any[];
  constructor() {
    this.skills=[
      {name: 'Angular 2+', images: 'angular_shadow.png', description: 'Angular is a free and open-source Javascript structural framework for dynamic web apps. Developped by Google, it lets you use HTML as your template language and lets you extend HTML\'s syntax to express your application\'s components clearly and succinctly.'},
      {name: 'Ionic 3', images: 'ionic3.png', description: 'Ionic is a complete open-source SDK for hybrid mobile app development. Ionic is built on Angular and Ionic 3 handles Angular 4. Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass.'},      
      {name: 'HTML5', images: 'html5_shadow.png', description: 'HTML (or Hypertext Markup Language) is the standard markup language used to create web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.'},
      {name: 'CSS3', images: 'css3_shadow.png', description: 'CSS is a cascading style sheet allowing to customize an HTML page with animations, colors, fonts family, margins, and so on.. That\'s why HTML and CSS are pair because the HTML is just the template of the website and the CSS all the design and the graphic part.'},    
      {name: 'SASS', images: 'sass.png', description: 'Sass lets you use features that don\'t exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS easiest. It will takes your preprocessed Sass file and save it as a normal CSS file that you can use in your web site.'},
      {name: 'Responsive web design', images: 'responsive_shadow.png', description: 'Responsive web design is the ability of a website to adapt to all the supports. This concept uses "media queries" in CSS to resize, show or hide content for the website to make it ergonomic and interactive on computer, tablet or smartphone.'},
      {name: 'Javascript', images: 'js_shadow.png', description: 'Javascript is dynamic programming language. With HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins.'},
      {name: 'Git', images: 'git_shadow.png', description: 'Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files'}
    ]
  }

  ngOnInit() {
  }

}
