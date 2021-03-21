import { DashboardScreen } from '../screens/DashboardScreen';
import { TitleScreen } from '../screens/TitleScreen';

export const ONBOARDING_ROUTES = [
    {
        name: 'Title',
        component: TitleScreen,
        options: {
            animationEnabled: false,
            gestureEnabled: false,
            headerShown: false,
        },
    },
];

export const APP_ROUTES = [
    {
        name: 'Dashboard',
        component: DashboardScreen,
        options: {
            gestureEnabled: false,
        },
    },
];
