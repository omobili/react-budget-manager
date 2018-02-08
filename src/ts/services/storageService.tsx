import {ActivityProps} from "../components/Activity";

class StorageService {
    load(): Array<ActivityProps> {
        if (window && window.localStorage && window.localStorage.getItem) {
            return JSON.parse(window.localStorage.getItem('rbm-data')) || [];
        }
        return [];
    }

    save(activities: Array<ActivityProps>): void {
        if (window && window.localStorage && window.localStorage.setItem) {
            window.localStorage.setItem('rbm-data', JSON.stringify(activities));
        }
    }
}

export let storageService = new StorageService();