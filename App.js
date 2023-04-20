import React, { useEffect, useState, useCallback } from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import AppLoading from 'expo-app-loading';
import Routes from './src/routes/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeBaseProvider } from 'native-base'
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
} from '@expo-google-fonts/rubik';
import NetInfo from '@react-native-community/netinfo'
import OfflineNotice from './src/components/offline.component';


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
   const [netInfo, setNetInfo] = useState('');
  const [isConnected, setIsConnected] = useState()


  let [fontsLoaded] = useFonts({
    Rubik_400Regular: require('./src/assets/fonts/Rubik-Regular.ttf'),
    Rubik_700Bold: require('./src/assets/fonts/Rubik-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.log(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare();
  }, []);
 

    useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected? ${state.isConnected}
        Ip Address: ${state.details.ipAddress}`
      )
      setIsConnected(state.isConnected)
    });
    return () => {
      unsubscribe();
    }
  })  


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }


  }, [appIsReady])
  
  if (!appIsReady) {
    return null
  }

  if (!fontsLoaded) {
    return null
  }


   


  return (
    <PaperProvider>
      <NativeBaseProvider>
        <View onLayout={onLayoutRootView} style={{flex: 1}}>
          {!isConnected ? 
          <OfflineNotice /> :
          <Routes />}
        </View>
      </NativeBaseProvider>
    </PaperProvider>

  );
}


