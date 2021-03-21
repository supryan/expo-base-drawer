import { observable, action, computed, makeAutoObservable, toJS } from 'mobx';

export class NavigationStore {
    currentRoute = false;

    constructor() {
        makeAutoObservable(this, {
            currentRoute: observable,
            setCurrentRoute: action.bound,
            getCurrentRoute: computed,
        });
    }

    setCurrentRoute(route) {
        this.currentRoute = route;
    }

    get getCurrentRoute() {
        return toJS(this.onboarding);
    }
}
