import './scss/app.scss';

import * as React from "react";
import * as ReactDom from "react-dom";
import {Activity, ActivityProps} from "./ts/components/activity";

interface budgetData {
    month: string;
    activities: Array<ActivityProps>;
}


class App extends React.Component {
    data: Array<budgetData>;

    constructor() {
        super({});

        this.data = [{
            month: '201801',
            activities: [{
                label: 'Salaire',
                amount: 2633.24
            }, {
                label: 'Cantine',
                amount: -15
            }]
        }];
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12">React Budget Manager !</h1>
                    <div className="row">
                        <div className="col-12">
                            {this.data[0].month}
                        </div>
                        <div className="col-12">
                            {this.data[0].activities.map((activity: ActivityProps) => {
                                return (
                                    <Activity label={activity.label} amount={activity.amount}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);