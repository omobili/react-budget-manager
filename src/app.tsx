import './styles/app.scss';

import * as React from "react";
import * as ReactDom from "react-dom";

interface budgetData {
    month: string;
}


class App extends React.Component {
    data: Array<budgetData>;

    constructor() {
        super({});

        this.data = [{
            month: '201801'
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