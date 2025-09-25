const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// Configure for Expo Router
config.resolver.platforms = [...config.resolver.platforms, 'native', 'ios', 'android'];

module.exports = withNativeWind(config, { input: './global.css' })