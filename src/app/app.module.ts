import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SkillsComponent } from './views/skills/skills.component';
import { WorksComponent } from './views/works/works.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'skills', 
    component: SkillsComponent 
  },
  { 
    path: 'works', 
    component: WorksComponent 
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/home',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
