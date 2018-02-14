import * as React from "react";
import {ActivityData} from "../services/dataService";

export interface ActivityProps extends ActivityData {
    id?: number;
    handleDeleteActivity?: Function;
}
export interface ActivityState { }

export class Activity extends React.Component<ActivityProps, ActivityState> {
    constructor(props: ActivityProps) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e: any) {
        e.preventDefault();

        if (this.props.id !== undefined && this.props.handleDeleteActivity) {
            this.props.handleDeleteActivity(this.props.id);
        }
    }

    render() {
        let activityClassName = function (amount: number) {
            return `rbm-activity${(amount > 0) ? ' rbm-activity--plus': ' rbm-activity--minus'}`;
        };

        return (
            <div className={activityClassName(this.props.amount)}>
                <div className="row">
                    <span className="col rbm-activity__label">{this.props.label}</span>
                    <span className="col-auto rbm-activity__amount">{this.props.amount} €</span>
                    {this.props.id !== undefined && (
                        <span className="col-auto rbm-activity__delete">
                            <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Supprimer</button>
                        </span>
                    )}
                </div>
            </div>
        )
    }
}