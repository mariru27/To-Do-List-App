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
  
  deleteActivity(id: number): void
  {
    this.activityService.deleteActivity(id);
    this.getActivityList();
  }

  moveFromListToDoneList(id: number)
  {
    this.activityService.moveFromListToDoneList(id);
  }
}
