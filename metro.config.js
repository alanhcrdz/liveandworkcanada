const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// adds "cjs" file extension because of firebase uses it and expo doesn't support. 
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;