import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import Theme from './constants/Theme';
import { AppNavigator } from './navigation/AppNavigator';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { getCachedAssets, Fonts } from './constants/Assets';
import { Base } from './components/Base';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const colorScheme = useColorScheme();

    return !loaded ? (
        <AppLoading startAsync={loadResourcesAsync} onError={handleLoadingError} onFinish={() => handleFinishLoading(setLoaded)} />
    ) : (
        <SafeAreaProvider initalMetrics={initialWindowMetrics}>
            <AppearanceProvider>
                <ThemeProvider theme={Theme[colorScheme]}>
                    <StatusBar barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
                    <AppNavigator theme={colorScheme} />
                    <Base />
                </ThemeProvider>
            </AppearanceProvider>
        </SafeAreaProvider>
    );
}

async function loadResourcesAsync() {
    const assets = await getCachedAssets();
    await Promise.all([assets, Font.loadAsync(Fonts)]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}