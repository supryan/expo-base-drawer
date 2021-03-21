import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { observer } from 'mobx-react';
import { useStores } from '../utils/hooks';
import { ONBOARDING_ROUTES, APP_ROUTES } from '../constants/Routes';
import Layout from '../constants/Layout';
import SideMenu from './SideMenu';
import { Header } from './Header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AppNavigator = observer(({ theme }) => {
    const { app: { isOnboarded } } = useStores()

    const AppStack = () => (
        <Stack.Navigator
            initialRouteName="Title"
            screenOptions={({ navigation, route }) => ({
                headerTitle: Header,
            })}>
            {ONBOARDING_ROUTES.map((route) => (
                <Stack.Screen key={route.name} {...route} />
            ))}
        </Stack.Navigator>
    );

    const DrawerStack = () => (
        <Stack.Navigator
            initialRouteName="Dashboard">
            {APP_ROUTES.map((route) => (
                <Stack.Screen
                    key={route.name}
                    {...route}
                />
            ))}
        </Stack.Navigator>
    );

    return (
        <NavigationContainer>
            {!isOnboarded ? (
                <AppStack />
            ) : (
                <Drawer.Navigator
                    initialRouteName="Main"
                    screenOptions={{ headerShown: false }}
                    drawerContent={(props) => <SideMenu {...props} />}
                    drawerType={Layout.window.width >= 768 ? 'permanent' : Platform.OS === 'ios' ? 'slide' : 'front'}>
                    <Drawer.Screen name="Main">{({ navigation }) => <DrawerStack />}</Drawer.Screen>
                </Drawer.Navigator>
            )}
        </NavigationContainer>
    );
});