import * as React from "react";

import {ActivityData, dataService} from "../services/dataService";

export interface ActivityAddProps {
    handleAddActivity: Function;
}
export interface ActivityAddStates extends ActivityData { }

export class ActivityAdd extends React.Component<ActivityAddProps, ActivityAddStates> {
    constructor(props: ActivityAddProps) {
        super(props);

        this.state = {
            label: '',
            amount: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        console.log(event.target.value);

        let updatedState: any = {};
        updatedState[event.target.name] = event.target.value;

        if (updatedState.amount) {
            updatedState.amount = parseFloat(updatedState.amount);
        }

        this.setState(updatedState);
    }

    handleSubmit(event: any) {
        event.preventDefault();

        if (this.props.handleAddActivity(this.state)) {
            this.setState({
                label: '',
                amount: 0
            });
        } else {
            // @todo Error.
        }
    }

    render() {
        return (
            <form className="rbm-activityAdd form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group rbm-activityAdd__field">
                    <label>Label: <input type="text" name="label" value={this.state.label} onChange={this.handleChange} /></label>
                </div>
                <div className="form-group rbm-activityAdd__field">
                    <label>Montant:
                        <input type="number" step="0.01" value={this.state.amount} name="amount" onChange={this.handleChange} /></label>
                </div>
                <input className="btn btn-primary" type="submit" value="Ajouter" />
            </form>
        )
    }
}