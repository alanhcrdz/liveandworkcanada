import React from 'react';
import { View, Platform } from 'react-native';
import { TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';



import * as Device from 'expo-device'



const productionAndroid = '';

const productionIos = '';

const bannerUnits = Platform.select({
    ios: Device.isDevice && !__DEV__ ? productionIos : TestIds.BANNER,
    android: Device.isDevice && !__DEV__ ? productionAndroid : TestIds.BANNER,
});



const Banner = () => {
    return (
           <BannerAd 
           unitId={bannerUnits}
           size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
           requestOptions={{
            createForAdRequest: true
           }}
           />
    )
}

export default Banner;