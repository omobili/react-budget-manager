import * as React from "react";

import {dataService} from "../services/dataService";

import {ActivityData} from "../services/dataService";

import {Activity} from "./Activity";
import {ActivityTotal} from "./ActivityTotal";
import {ActivityAdd} from "./ActivityAdd";

export interface ActivityListProps {
    type: string;
    activities: Array<ActivityData>
}
export interface ActivityListStates { }

export class ActivityList extends React.Component<ActivityListProps, ActivityListStates> {
    constructor(props: ActivityListProps) {
        super(props);

        this.addActivity = this.addActivity.bind(this);
    }

    addActivity(activity: ActivityData) {
        dataService.addActivity(this.props.type, activity);
    }

    calcTotal(): number {
        let total = 0;

        this.props.activities.map((activity: ActivityData) => {
            total += activity.amount;
        });

        return parseFloat(total.toFixed(2));
    }

    render() {
        return (
            <div className="rbm-activityList">
                {this.props.activities.map((activity: ActivityData, index: number) => {
                    return (
                        <Activity key={index} label={activity.label} amount={activity.amount} id={index} />
                    );
                })}

                <ActivityTotal total={this.calcTotal()}/>
                <ActivityAdd handleAddActivity={this.addActivity} />
            </div>
        );
    }
}
