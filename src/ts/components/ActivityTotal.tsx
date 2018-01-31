import * as React from "react";

export interface ActivityTotalProps {
    total: number
}

export interface ActivityTotalState {

}

export class ActivityTotal extends React.Component<ActivityTotalProps, ActivityTotalState> {
    constructor(props: ActivityTotalProps) {
        super(props);
    }

    render() {
        return (
            <div className="row rbm-activityTotal">
                <span className="col rbm-activityTotal__label">Total</span>
                <span className="col rbm-activityTotal__total">{this.props.total} €</span>
            </div>
        )
    }
}