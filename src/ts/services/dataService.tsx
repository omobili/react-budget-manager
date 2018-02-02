import {ActivityProps} from "../components/Activity";

class DataService {
    activities: Array<ActivityProps>;
    private activitiesChangeHandlers: Array<Function>;

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

        this.activitiesChangeHandlers = [];
    }

    addActivity(activity: ActivityProps): boolean {
        if (activity.amount !== 0 && activity.label !== '') {
            this.activities.push(activity);
            this.activitiesChangeHandlers.forEach((handler: Function) => {
                handler();
            });

            return true;
        }

        return false;
    }

    onActivitiesChange(handler: Function) {
        this.activitiesChangeHandlers.push(handler);
    }
}

export let dataService = new DataService();