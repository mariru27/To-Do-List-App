import { Injectable } from '@angular/core';
import { Activity } from './Activity';
import { ACTIVITIESLIST, ACTIVITIESDONE } from './activity-data';

@Injectable()
export class ActivityService{
    index: number;
    constructor() 
    {
        this.index = 6; 
    };
    
    getActivityList(): Activity[]
    {
        return ACTIVITIESLIST.sort((a, b) => b.id - a.id);
    }

    getActivityDone(): Activity[] 
    {
        return ACTIVITIESDONE;
    }

    addActivity(activityName: string): void
    {
        ++this.index;
        ACTIVITIESLIST.push({id: this.index, name: activityName});
    }
}