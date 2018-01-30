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
        return (
            <div className="rbm-activity">
                <p>{this.props.label}</p>
                <p>{this.props.amount}</p>
            </div>
        )
    }
}