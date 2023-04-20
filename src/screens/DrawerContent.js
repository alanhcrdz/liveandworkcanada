import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Linking,
    Platform,
    Modal,
    Dimensions
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Drawer,
    Avatar,
    Title,
} from 'react-native-paper';

import {
    Feather,
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
    MaterialIcons,
    EvilIcons,

} from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017;
const DrawerContent = ({ otherProps, navigation }) => {

    // MODAL
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModalVisibility = () => {
        setModalVisible(true)
    }


    // Open the iOS App Store in the browser -> redirects to App Store on iOS

    const handleAppReview = () => {
        const androidPackageName = 'com.globalpromotions.workincanadanow';
        const itunesItemId = '1606457863'; // APPLE ID
        if (Platform.OS === 'android') {
            Linking.openURL(`https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`);
        } else {
            Linking.openURL(`https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review`)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...otherProps} >
               
                <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Avatar.Image
                            style={{backgroundColor: 'white',}}
                            source={
                                require('../assets/logonew.png')
                            }
                            size={45}
                        />
                        <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                            <Title  style={styles.appTitle}>Live and Work <Text style={{color: 'red'}}>Canada</Text></Title>
                        </View>
                    </View>
                </View>
                    <Drawer.Section title="Main" style={styles.drawerSection} >

                        <DrawerItem
                        onPress={() => {Linking.openURL('https://www.instagram.com/liveandworkcanada') }}
                            icon={({ color, size }) => (
                                <Feather
                                    name='instagram'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Follow us"
                        />
                       {/*  <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name='privacy-tip'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Privacy Policy"
                            onPress={() => { Linking.openURL('https://globalpromotions.ca/privacy-policy') }}
                        /> */}

                         {/*  <DrawerItem
                            icon={({ color, size }) => (
                                <Entypo
                                    name='star-outlined'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Leave Feedback"
                            onPress={handleModalVisibility}
                        />  */}

                    </Drawer.Section>
                </View>
                
            </DrawerContentScrollView>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.close}
                            onPress={() => { setModalVisible(!modalVisible) }}>

                            <AntDesign
                                name="closecircleo"
                                size={24}
                                color="white" />

                        </TouchableOpacity>
                        <View>
                            <Text style={styles.title}>Enjoying this App?</Text>
                        </View>
                        <View style={styles.starsContainer}>
                            <EvilIcons name="star" size={26} color="white" />
                            <EvilIcons name="star" size={26} color="white" />
                            <EvilIcons name="star" size={26} color="white" />
                            <EvilIcons name="star" size={26} color="white" />
                            <EvilIcons name="star" size={26} color="white" />
                        </View>
                        <Text style={styles.modalText}>Show us what you think!</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton }}
                            onPress={handleAppReview}>
                            <View>
                                <Text
                                    style={styles.textStyle}>
                                    {Platform.OS === 'android' ? 'Rate Us on Google Play' : 'Rate Us on App Store'}
                                </Text>
                            </View>
                        </TouchableHighlight>




                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: titleSize,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: textSize,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    appTitle: {
        fontSize: textSize,
        textAlign: 'center',
        marginBottom: 8,
    },
      // MODAL STYLE
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.blue,
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        borderRadius: 8,
        padding: 16,
        elevation: 2,
        width: 250,
        backgroundColor: colors.primary,
    },
    textStyle: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    modalText: {
        marginBottom: 15,
        marginTop: 10,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.text,

    },
    close: {
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    title: {
        fontFamily: fonts.title,
        color: colors.white,
        fontSize: titleSize,
        textAlign: 'center',
        marginBottom: 8,
    }
})


export default DrawerContent;