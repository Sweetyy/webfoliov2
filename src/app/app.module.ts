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
import { ContactComponent } from './views/contact/contact.component';

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
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { path: '',
    redirectTo: '/skills',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/skills',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent
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
