import { observable, action, computed, toJS, when, makeAutoObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import config from '../constants/Config'
import { generateId } from '../utils/helpers';

export class NotificationStore {
    loader = {
        active: false,
        overlay: true,
    };

    alert = {
        active: false,
    };

    snacks = [];

    loaderTimeout = null;

    constructor() {
        makeAutoObservable(this, {
            loader: observable,
            snacks: observable,
            alert: observable,
            showLoader: action.bound,
            hideLoader: action.bound,
            showSnackbar: action.bound,
            hideSnackbar: action.bound,
            showAlert: action.bound,
            hideAlert: action.bound,
            getLoader: computed,
            getSnackbars: computed,
            getAlert: computed,
        });
    }

    showLoader(options = { overlay: true, timeout: true }) {
        this.loader = {
            active: true,
            overlay: options?.overlay,
        };

        if (this.loaderTimeout) {
            clearTimeout(this.loaderTimeout);
        }

        // Hide the loader after a default timeout
        this.loaderTimeout = setTimeout(
            () => {
                runInAction(() => {
                    this.loader = {
                        active: false,
                        overlay: options?.overlay,
                    };
                });
            },
            options?.timeout ? config.variables.loaderTimeout * 1000 : 0
        );
    }

    hideLoader() {
        this.loader.active = false;
    }

    showSnackbar(snack) {
        this.snacks.push({ id: generateId(), ...snack });
    }

    hideSnackbar(id) {
        this.snacks = this.snacks.slice().filter((snack) => snack.id !== id);
    }

    // Show alert, wait for promise
    async showAlert(data) {
        this.alert = {
            id: generateId(),
            active: true,
            ...data,
        };

        await when(() => this.alert.active === false);
    }

    hideAlert() {
        this.alert.active = false;

        // Remove all other data
         setTimeout(() => {
             runInAction(() => {
                 this.alert = { active: false };
             })
         }, 500);
    }

    get getLoader() {
        const loader = toJS(this.loader);
        return toJS(loader);
    }

    get getSnackbars() {
        return toJS(this.snacks);
    }

    get getAlert() {
        return toJS(this.alert);
    }
}