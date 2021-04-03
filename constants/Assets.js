import { flatten } from '../utils/helpers';
import { Asset } from 'expo-asset';

// Media
export const Assets = {
    icons: {
        logo: require('../assets/icon.png'),
    },
};

// Fonts
export const Fonts = {
    'proxima-light': require('../assets/fonts/ProximaNova/ProximaNova-Light.otf'),
    'proxima-regular': require('../assets/fonts/ProximaNova/ProximaNova-Regular.otf'),
    'proxima-semibold': require('../assets/fonts/ProximaNova/ProximaNova-Semibold.otf'),
    'proxima-bold': require('../assets/fonts/ProximaNova/ProximaNova-Bold.otf'),
    'proxima-black': require('../assets/fonts/ProximaNova/ProximaNova-Black.otf'),
};

// Primarily used on app initialization for gathering assets and caching
// Most likely does not need to be touched
// See App.js _loadResourcesAsync()
export const getCachedAssets = async () => {
    const promises = Object.keys(Assets)
        .map((keys) => flatten(Assets[keys]))
        .flat()
        .map((asset) => Asset.fromModule(asset).downloadAsync());
    return promises;
};
