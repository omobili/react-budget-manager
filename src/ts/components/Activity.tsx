import * as React from "react";

export interface ActivityProps {
    label: string,
    amount: number
}

export interface ActivityState {

}

export class Activity extends React.Component<ActivityProps, ActivityState> {
    constructor(props: ActivityProps) {
        super(props);
    }

    render() {
        let activityClassName = function (amount: number) {
            return `row rbm-activity${(amount > 0) ? ' rbm-activity--plus': ' rbm-activity--minus'}`;
        };

        return (
            <div className={activityClassName(this.props.amount)}>
                <span className="col rbm-activity__label">{this.props.label}</span>
                <span className="col rbm-activity__amount">{this.props.amount} €</span>
            </div>
        )
    }
}