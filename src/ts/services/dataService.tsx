import {ActivityProps} from "../components/Activity";

class DataService {
    activities: Array<ActivityProps>;

    constructor() {
        this.activities = [{
            label: 'Salaire',
            amount: 1234.56
        }, {
            label: 'Monoprix',
            amount: -23.45
        }, {
            label: 'Pharmacie',
            amount: -12.47
        }, {
            label: 'FNAC.com',
            amount: -69.90
        }];
    }
}

export let dataService = new DataService();