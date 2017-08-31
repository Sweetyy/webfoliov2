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
        name: 'Dailyrious', 
        images: 'dailyrious.png', 
        link: 'http://dailyrious.net', 
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'
      },
      {
        name: 'Foodtrack', 
        images: 'foodtrack.png', 
        link: 'https://play.google.com/store/apps/details?id=com.ionicframework.final994902', 
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'
      },
      {
        name: 'Just Square', 
        images: 'justsquare.png', 
        link: '', 
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'
      },
    ]
  }

  ngOnInit() {
  }

}
