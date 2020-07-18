import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { DoneActivitiesComponent } from './done-activities/done-activities.component';


const routes: Routes = [
  { path: "new-activity", component: NewActivityComponent },
  { path: "list-activities", component: ListActivitiesComponent },
  { path: "done-activities", component: DoneActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
