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
  
  constructor(protected activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivityDone();
  }
  getActivityDone(): void
  {
    this.activityDone = this.activityService.getActivityDone();
  }

  deleteActivityDone(id: number): void
  {
    this.activityService.deleteActivityDone(id);
    this.getActivityDone();
  }
  moveFromDoneToList(id: number)
  {
    this.activityService.moveFromDoneToList(id);
  }
}
