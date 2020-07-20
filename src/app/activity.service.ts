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
   
    moveFromListToDoneList(id: number)
    {
        const Index = ACTIVITIESLIST.findIndex(activity => activity.id === id);
        const ActivityObj = ACTIVITIESLIST.find(activity => activity.id === id);

        ACTIVITIESDONE.push(ActivityObj);
        console.log("added " + ActivityObj + " to Done List");

        ACTIVITIESLIST.splice(Index,1);
        console.log("deleted from list " + ActivityObj);

    }
    moveFromDoneToList(id: number)
    {
        const Index = ACTIVITIESDONE.findIndex(activity => activity.id === id);
        const ActivityObj = ACTIVITIESDONE.find(activity => activity.id === id);

        ACTIVITIESLIST.push(ActivityObj);
        console.log("added " + ActivityObj + " Activity List");

        ACTIVITIESDONE.splice(Index,1);
        console.log("deleted from Done List " + ActivityObj);
    }
}