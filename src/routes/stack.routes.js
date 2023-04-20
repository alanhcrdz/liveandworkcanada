import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import { colors } from '../constants/colors';
import Alberta from '../screens/provinces/Alberta';
import BritishColumbia from '../screens/provinces/BritishColumbia';
import Ontario from '../screens/provinces/Ontario';
// import Quebec from '../screens/provinces/Quebec';
import Careers from '../screens/Careers';
import Immigration from '../screens/Immigration';
import AboutInfo from '../screens/AboutInfo';
import StepByStep from '../screens/StepByStep';
import CostLiving from '../screens/CostLiving';
import JobMarket from '../screens/JobMarket';

import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
 function AppRoutes({ navigation }) {

  return (
    
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <Feather style={styles.menu}
            name="menu" 
                size={27} 
                color="white"
                onPress={() => {navigation.openDrawer()}} />
          )
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: '',
          headerStyle: {
            elevation: 0,
            backgroundColor: colors.blue,
          }

        }} />
        <Stack.Screen name="About" component={AboutInfo} options={{
          title: 'About Canada',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />
        <Stack.Screen name="CostLiving" component={CostLiving} options={{
          title: 'Cost of Living',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />
        <Stack.Screen name="JobMarket" component={JobMarket} options={{
          title: 'Find a Job',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />

        

        {/* <Stack.Screen name="Alberta" component={Alberta} options={{
          title: 'Alberta',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} /> */}

       {/*  <Stack.Screen name="BritishColumbia" component={BritishColumbia} options={{
          title: 'British Columbia',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} /> */}

        {/* <Stack.Screen name="Ontario" component={Ontario} options={{
          title: 'Ontario',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} /> */}
{/* 
        <Stack.Screen name="Quebec" component={Quebec} options={{
          title: 'Quebec',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} /> */}

<Stack.Screen name="Careers" component={Careers} options={{
          title: 'Careers',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />

<Stack.Screen name="Immigration" component={Immigration} options={{
          title: 'Immigration',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />

<Stack.Screen name="StepByStep" component={StepByStep} options={{
          title: 'Step by Step',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.blue,
          }
        }} />
      </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  drawer: {
      padding: 10,
  },
  menu: {
      padding: 10,
  }
});

export default AppRoutes;



