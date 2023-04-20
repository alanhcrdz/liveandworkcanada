
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppRoutes from './stack.routes';
import DrawerContent from '../screens/DrawerContent';
import { colors } from '../constants/colors';
const Drawer = createDrawerNavigator();


const DrawerRoutes = () => {
    return (
        <Drawer.Navigator  
        drawerContent={props =>  <DrawerContent {...props} />}
        screenOptions={{
            headerShown: false,
        }}
       >
           <Drawer.Screen name="Home Screen" component={AppRoutes} />

       </Drawer.Navigator>
    )
       
}

export default DrawerRoutes;