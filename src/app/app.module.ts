import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivityService } from './activity.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { DoneActivitiesComponent } from './done-activities/done-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    NewActivityComponent,
    ListActivitiesComponent,
    DoneActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
