import './scss/app.scss';

import * as React from "react";
import * as ReactDom from "react-dom";

import {BudgetData, dataService} from "./ts/services/dataService";
import {ActivityList} from "./ts/components/ActivityList";

interface AppProps {}
interface AppStates {
    budget: BudgetData
}

class App extends React.Component<AppProps, AppStates> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            budget: dataService.getLastBudget() // @todo quel mois recuperer ? (nom de methode ?)
        };

        dataService.onBudgetChange(() => {
            this.setState({
                budget: dataService.currentBudget
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Rentrées d'argent</h1>
                        <ActivityList type={'incomes'} activities={this.state.budget.incomes} />
                    </div>
                    <div className="col-6">
                        <h1>Frais Fixes</h1>
                        <ActivityList type={'outgoings'} activities={this.state.budget.outgoings} />
                    </div>
                    <div className="col-12">
                        <h1>Dépenses courantes</h1>
                        <ActivityList type={'spendings'} activities={this.state.budget.spendings} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);