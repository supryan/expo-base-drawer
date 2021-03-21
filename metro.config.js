const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: [...defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), 'otf'],
        sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    },
};
