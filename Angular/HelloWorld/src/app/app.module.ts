import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
