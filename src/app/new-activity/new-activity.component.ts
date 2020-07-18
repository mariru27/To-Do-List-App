import { Component, OnInit } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})

export class NewActivityComponent implements OnInit {
  activityList: Activity[] = [];

  constructor(protected activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivityList();
  }

  add(activityName: string): void
  {
    console.log("activitate " + activityName);
    this.activityService.addActivity(activityName);
    this.getActivityList();
  }
  getActivityList(): void 
  {
    this.activityList = this.activityService.getActivityList();
  }
  deleteActivity(id: number): void
  {
    this.activityService.deleteActivity(id);
    this.getActivityList();
  }
}
