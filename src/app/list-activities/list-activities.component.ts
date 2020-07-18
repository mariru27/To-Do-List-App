import { Component, OnInit } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  activityList: Activity[] = [];
  constructor(protected activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivityList();
  }

  getActivityList(): void 
  {
    this.activityList = this.activityService.getActivityList();
  }
}
