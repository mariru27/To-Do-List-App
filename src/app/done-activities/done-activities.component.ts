import { Component, OnInit } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-done-activities',
  templateUrl: './done-activities.component.html',
  styleUrls: ['./done-activities.component.css']
})
export class DoneActivitiesComponent implements OnInit {
  activityDone: Activity[] = [];
  
  constructor(protected acivityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivityList();
  }
  getActivityList(): void
  {
    this.activityDone = this.acivityService.getActivityDone();
  }

}
