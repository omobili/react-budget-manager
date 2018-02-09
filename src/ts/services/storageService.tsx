import {BudgetData} from "./dataService";

class StorageService {
    load(): Array<BudgetData> {
        if (window && window.localStorage && window.localStorage.getItem) {
            return JSON.parse(window.localStorage.getItem('rbm-data')) || [];
        }
        return [];
    }

    save(data: Array<BudgetData>): void {
        if (window && window.localStorage && window.localStorage.setItem) {
            window.localStorage.setItem('rbm-data', JSON.stringify(data));
        }
    }
}

export let storageService = new StorageService();