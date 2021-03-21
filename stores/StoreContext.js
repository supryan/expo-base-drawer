import React from 'react';
import { AppStore } from './AppStore';
import { NotificationStore } from './NotificationStore';

export const storesContext = React.createContext({
    app: new AppStore(),
    notification: new NotificationStore(),
});
