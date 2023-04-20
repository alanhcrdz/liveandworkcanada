import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    Dimensions 
} from 'react-native';
import { HStack, Icon  } from 'native-base';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { FontAwesome5, Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
 const Header = () => {
    return (
           <View style={styles.header}>
               <HStack space={2} style={{alignItems: 'center'}}>
                   <Icon as={FontAwesome5} name="canadian-maple-leaf"
                   color={colors.white} size={30} />

               <Text style={[styles.title, { fontSize: height * 0.027 }]}>Live and Work Canada</Text>
               </HStack>
               <Text style={[styles.text, {fontSize: height * 0.017 }]}>Ontario Guide</Text>
           </View>
    )
}
const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        backgroundColor: colors.blue,
        padding: 12,
        height: 100,
        overflow:'hidden',
    },
    title: {
        color: colors.white,
        fontFamily: fonts.title,
        marginTop: 6,
    },
    text: {
        color: colors.white,
        fontFamily: fonts.text,
        fontStyle: 'italic',
    },
    menu: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
   
})

export default Header;
