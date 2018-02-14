import {storageService} from "./storageService";
import {ActivityProps} from "../components/Activity";

export interface ActivityData {
    label: string;
    amount: number;
}

export interface BudgetData {
    incomes: Array<ActivityData>;
    outgoings: Array<ActivityData>;
    spendings: Array<ActivityData>;
    [key: string]: Array<ActivityData>;
}

class DataService {
    budgets: Array<BudgetData>;
    currentBudget: BudgetData;

    private budgetChangeHandlers: Array<Function>;

    constructor() {
        this.budgetChangeHandlers = [];
        this.load();
    }

    private load(): void {
        this.budgets = storageService.load();
    }

    private save(): void {
        storageService.save(this.budgets);
    }

    getLastBudget() {
        if (!this.budgets.length) {
            this.budgets.push({
                incomes: [],
                outgoings: [],
                spendings: []
            });

            this.save();
        }

        this.currentBudget = this.budgets[this.budgets.length-1];

        return this.currentBudget;
    }

    removeActivity(type: string, key: number): boolean {
        if (!this.currentBudget || !this.currentBudget[type]) {
            return false;
        }

        this.currentBudget[type].splice(key, 1);
        this.notifyBudgetHasChange();

        this.save();

        return true;
    }

    addActivity(type: string, activity: ActivityData): boolean {
        if (!this.currentBudget || !this.currentBudget[type]) {
            return false;
        }

        if (activity.amount !== 0 && activity.label !== '') {
            this.currentBudget[type].push(activity);
            this.notifyBudgetHasChange();

            this.save();

            return true;
        }

        return false;
    }

    notifyBudgetHasChange(): void {
        this.budgetChangeHandlers.forEach((handler: Function) => {
            handler();
        });
    }

    onBudgetChange(handler: Function) {
        this.budgetChangeHandlers.push(handler);
    }



    /*
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
    */
}

export let dataService = new DataService();