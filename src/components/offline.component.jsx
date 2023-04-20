import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import { colors } from '../constants/colors';
import { Button } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo'

const OfflineNotice = () => {
   /*  const [netInfo, setNetInfo] = useState('');
  const [isConnected, setIsConnected] = useState()

    const checkConnection = () => {
        NetInfo.addEventListener((state) => {
            setNetInfo(
              `Connection type: ${state.type}
              Is connected? ${state.isConnected}
              Ip Address: ${state.details.ipAddress}`
            )
            setIsConnected(state.isConnected)
          });
    } */
    return (
        <View style={[styles.offlineContainer, { flexDirection: 'column' }]}>
            <View style={{ width: 300, alignItems: 'center' }}>
            <Text style={styles.offlineText}>No Internet Connection.</Text>
            <Text style={styles.offlineText}>Please verify your Network and try again.</Text>

            </View>
            <View style={{
                marginTop: 10, 
                width: 140, 
                height: 140, 
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }} >
                <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/offline.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: colors.secondary,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    offlineText: {
        color: '#fff'
    }
})
export default OfflineNotice;