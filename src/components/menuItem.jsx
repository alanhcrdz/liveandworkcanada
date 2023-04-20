import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const Item = ({ title, icon }) => {
    return (
        <View>
            <TouchableOpacity 
            activeOpacity={0.6} 
            style={styles.wrapper}
            >

            <MaterialIcons name={icon} size={40} color="white" />
            </TouchableOpacity>
                <Text style={[styles.text, {fontSize: height * 0.019}]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        margin: 10,
        width: 160,
        height: 140,
        borderRadius:8,
    },
      text: {
        color: colors.blue,
        marginLeft: 10,
        fontFamily: fonts.title,
    }

})

export default Item;