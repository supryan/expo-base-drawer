import { observable, action, computed, makeAutoObservable, toJS, runInAction } from 'mobx';
import * as SecureStore from 'expo-secure-store';

export class AppStore {
    onboarding = false;

    constructor() {
        makeAutoObservable(this, {
            onboarding: observable,
            init: action.bound,
            setOnboarding: action.bound,
            store: action,
            retrieve: action,
            clearStorage: action,
            isOnboarded: computed,
        });
    }

    async init() {
        const storeAvailable = await SecureStore.isAvailableAsync();

        if (storeAvailable) {
            // Uncomment to enable persistant storage of onboarding
            // const status = await this.retrieve('onboarding');

            runInAction(() => {
                if (status) {
                    this.onboarding = status;
                }
            })
        } else {
            console.warn('SecureStore not available')
        }
    }

    async setOnboarding(status) {
        this.onboarding = status;
    }

    async store(key, value) {
        return await SecureStore.setItemAsync(key, JSON.stringify(value));
    }

    async retrieve(key) {
        const value = await SecureStore.getItemAsync(key);
        return value ? JSON.parse(value) : null;
    }

    async clearStorage(key) {
        return await SecureStore.deleteItemAsync(key);
    }

    get isOnboarded() {
        return toJS(this.onboarding);
    }
}