import React from 'react';
import { AppStore } from './AppStore';
import { NotificationStore } from './NotificationStore';
import { NavigationStore } from './NavigationStore';

export const storesContext = React.createContext({
    app: new AppStore(),
    notification: new NotificationStore(),
    nav: new NavigationStore()
});
