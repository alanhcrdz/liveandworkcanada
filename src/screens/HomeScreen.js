import React, { useEffect, useState, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
  Alert,
  BackHandler,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { LIST } from "../components/menuList";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/header";
import Banner from "../components/ads/Banner";
import styled from "styled-components";

import {
  InterstitialAd,
  TestIds,
  AdEventType,

} from 'react-native-google-mobile-ads';
import * as Device from 'expo-device'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';


// * Interstitial
const productionIterstitialIos = "";

const productionInterstitialAndroid = "";

const interstitialUnit = Platform.select({
  ios:
    Device.isDevice && !__DEV__
      ? productionIterstitialIos
      : TestIds.INTERSTITIAL,
  android:
    Device.isDevice && !__DEV__
      ? productionInterstitialAndroid
      : TestIds.INTERSTITIAL,
});

const interstitial = InterstitialAd.createForAdRequest(interstitialUnit, {
  requestNonPersonalizedAdsOnly: true
});





const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const iPadSize = height * 0.018;


const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const isMounted = useRef();
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState()



  useEffect(() => {
    StatusBar.setHidden(true);
    if (isFocused) {
      const backAction = () => {
        Alert.alert("Exit App", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "Exit App", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    } else {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }, []);

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log('Ad has loaded');
      setInterstitialLoaded(true)
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Ad has closed')
      setInterstitialLoaded(false);
      interstitial.load();
    });
    const unsubscribeClicked = interstitial.addAdEventListener(AdEventType.CLICKED, () => {
      console.log('Ad has been clicked')
      setInterstitialLoaded(false);
      interstitial.load();
    });

    const adErrorEvent = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      console.log(`Ad failed to open: `, error.message)
      interstitial.removeAllListeners();
     
 

    })

    interstitial.load();
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeClicked();
      adErrorEvent();
    }
  }


  useEffect(() => {
    isMounted.current = true;
    const unsubscribeInterstitialEvents = loadInterstitial();

    return () => {
      unsubscribeInterstitialEvents();

      (isMounted.current = false);
    };
  }, [])

  // * Ios transparency tracking permission
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === 'granted') {
        console.log('Yay! I have user permission to track data');
      }
    })();
  }, []);


  const renderItem = ({ item }) => {
    return (
      <>
        <View style={Platform.isPad ? styles.ipad : null}>
          <Wrapper
            activeOpacity={0.6}
            onPress={() => {
              if ( interstitialLoaded && item.label === "living" 
              || interstitialLoaded && item.label === "job" 
              || interstitialLoaded && item.label === "step") {
                interstitial.show();
                setTimeout(() => {
                  navigation.navigate(item.navigate, {
                    title: item.title,
                    label: item.label,
                  });
                }, 3000)

              } else {
                navigation.navigate(item.navigate, {
                  title: item.title,
                  label: item.label,
                });
              }
            }}
          >
            
                <View style={styles.listBorder}>
                  {item.icon === "passport" ? (
                    <FontAwesome5 name="passport" size={50} color="white" />
                  ) : (
                    <MaterialIcons name={item.icon} size={50} color="white" />
                  )}
                </View>
               
          </Wrapper>
          <Text style={styles.title}>{item.title}</Text>
        </View>


      </>
    );
  };
 

  return (
    <>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={LIST}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <View style={Platform.isPad ? styles.padPosition : null}>
          <Banner />
        </View>
      </View>
    </>
  );
};
const Wrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  margin: 10px;
  width: 140px;
  height: 140px;
  border-radius: 8px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    margin: 10,
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  title: {
    color: colors.blue,
    fontSize: Platform.isPad ? iPadSize : titleSize,
    marginLeft: 10,
    fontFamily: fonts.title,
  },
  listBorder: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.white,
    width: 120,
    height: 120,
  },

  ipad: {
    width: '50%',
    justifyContent: "center",
    alignItems: 'center'
  },
  padPosition: {
    height: 400,
    justifyContent: 'flex-end',
  }
});

export default HomeScreen;
