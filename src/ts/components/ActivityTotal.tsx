import * as React from "react";

export interface ActivityTotalProps {
    total: number
}
export interface ActivityTotalStates { }

export class ActivityTotal extends React.Component<ActivityTotalProps, ActivityTotalStates> {
    constructor(props: ActivityTotalProps) {
        super(props);
    }

    render() {
        return (
            <div className="rbm-activityTotal">
                <div className="row">
                    <span className="col rbm-activityTotal__label">Total</span>
                    <span className="col rbm-activityTotal__total">{this.props.total} €</span>
                </div>
            </div>
        );
    }
}
