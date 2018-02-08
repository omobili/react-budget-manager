import {storageService} from "./storageService";
import {ActivityProps} from "../components/Activity";

class DataService {
    activities: Array<ActivityProps>;
    private activitiesChangeHandlers: Array<Function>;

    constructor() {
        this.activitiesChangeHandlers = [];
        this.load();
    }

    private load(): void {
        this.activities = storageService.load();
    }

    private save(): void {
        storageService.save(this.activities);
    }

    addActivity(activity: ActivityProps): boolean {
        if (activity.amount !== 0 && activity.label !== '') {
            this.activities.push(activity);
            this.notifyActivitiesHasChange();

            this.save();

            return true;
        }

        return false;
    }

    removeActivity(key: number): void {
        if (this.activities[key]) {
            this.activities.splice(key, 1);
            this.notifyActivitiesHasChange();

            this.save();

            console.log(this.activities);
        }
    }

    onActivitiesChange(handler: Function) {
        this.activitiesChangeHandlers.push(handler);
    }

    notifyActivitiesHasChange() {
        this.activitiesChangeHandlers.forEach((handler: Function) => {
            handler();
        });
    }
}

export let dataService = new DataService();