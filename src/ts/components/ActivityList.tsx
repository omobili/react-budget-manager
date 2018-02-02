import * as React from "react";
import {Activity, ActivityProps} from "./Activity";
import {ActivityTotal} from "./ActivityTotal";
import {ActivityAdd} from "./ActivityAdd";

export interface ActivityListProps {
    activities: Array<ActivityProps>
}

export interface ActivityListState {

}

export class ActivityList extends React.Component<ActivityListProps, ActivityListState> {
    constructor(props: ActivityListProps) {
        super(props);
    }

    calcTotal(): number {
        let total = 0;

        this.props.activities.map((activity: ActivityProps) => {
            total += activity.amount;
        });

        return Math.round(total);
    }

    render() {
        return (
            <div className="rbm-activityList">
                {this.props.activities.map((activity: ActivityProps, index: number) => {
                    return (
                        <Activity key={index} label={activity.label} amount={activity.amount} id={index} />
                    );
                })}

                <ActivityTotal total={this.calcTotal()}/>
                <ActivityAdd/>
            </div>
        );
    }
}