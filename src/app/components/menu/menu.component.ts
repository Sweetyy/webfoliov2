import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  private active:boolean;
  @Output() open = new EventEmitter();

  constructor(private router:Router) { 
    this.active = false;
  }

  ngOnInit() {
  }

  showMenu():void {
    this.active = !this.active;
    this.open.emit(this.active);
  }

}
