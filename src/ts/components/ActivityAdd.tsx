import * as React from "react";

export interface ActivityAddProps {

}

export interface ActivityAddState {
    label: string;
    amount: number;
}

export class ActivityAdd extends React.Component<ActivityAddProps, ActivityAddState> {
    constructor(props: ActivityAddProps) {
        super(props);

        this.state = {
            label: '',
            amount: 0
        }
    }

    render() {
        return (
            <form className="row rbm-activityAdd">
                <label>Label:
                    <input type="text" name="label" /></label>
                <label>Montant:
                    <input type="number" name="amount" /></label>
                <input type="submit" value="Ajouter" />
            </form>
        )
    }
}