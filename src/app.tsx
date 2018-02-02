import './scss/app.scss';

import * as React from "react";
import * as ReactDom from "react-dom";

import {dataService} from "./ts/services/dataService";
import {ActivityProps} from "./ts/components/Activity";
import {ActivityList} from "./ts/components/ActivityList";

export interface AppProps {
}

export interface AppState {
    activities: Array<ActivityProps>
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            activities: dataService.activities
        };

        dataService.onActivitiesChange(() => {
            this.setState({
                activities: dataService.activities
            });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ActivityList activities={this.state.activities} />
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