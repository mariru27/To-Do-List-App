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
    deleteActivity(id: number): void
    {
        const Index = ACTIVITIESLIST.findIndex(activity => activity.id === id);
        console.log("deleted " + Index);
        ACTIVITIESLIST.splice(Index,1);
    }
    deleteActivityDone(id: number)
    {
        const Index = ACTIVITIESDONE.findIndex(activity => activity.id === id);
        console.log("deleted " + Index);
        ACTIVITIESDONE.splice(Index,1);
    }
}