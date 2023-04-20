import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { transports } from '../constants/ontario/transports';
import { foods } from '../constants/ontario/foods';
import { real_estate } from '../constants/ontario/real-estate';
import { rental } from '../constants/ontario/rental';

import { HStack, Icon, VStack, Link, Divider } from 'native-base';
import {
    MaterialIcons,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5,
    Ionicons,
} from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017;

const Ontario = () => {
    return (
        <ScrollView >
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/store.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Real Estate Prices</Text>
                <View style={styles.border}>
                    <VStack space={3} divider={<Divider />} w="100%">
                        {
                            real_estate.map(item => (
                                <HStack key={item.id} alignItems={'center'} space={3} justifyContent="space-between">
                                    <Icon as={item.id < '04' ? Entypo : MaterialIcons} name={item.icon} />
                                    <Text style={styles.text}>{item.text}</Text>
                                    <Text style={[styles.text, { fontWeight: '700', color: colors.lightblue }]}>{item.price}</Text>
                                </HStack>
                            ))
                        }



                    </VStack>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[
                                styles.text, {
                                    fontStyle: 'italic',
                                    color: colors.blue,
                                    fontWeight: '700',
                                    marginTop: 20,
                                }]}>
                            Source:</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.zolo.ca/toronto-real-estate'
                        >https://www.zolo.ca/
                        </Link>

                    </View>
                </View>

                <Text style={styles.title}>Rental Prices</Text>
                <View style={styles.border}>
                    <VStack space={3} divider={<Divider />} w="100%">
                        {
                            rental.map(item => (
                                <HStack key={item.id} alignItems={'center'} space={3} justifyContent="space-between">
                                    <Icon as={item.id < '03' ? Entypo : MaterialIcons} name={item.icon} />
                                    <Text style={styles.text}>{item.text}</Text>
                                    <Text style={[styles.text, { fontWeight: '700', color: colors.lightblue }]}>{item.price}</Text>
                                </HStack>
                            ))
                        }

                    </VStack>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[
                                styles.text, {
                                    fontStyle: 'italic',
                                    color: colors.blue,
                                    fontWeight: '700',
                                    marginTop: 20,
                                }]}>
                            Source:</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.rentboard.ca/ontario'
                        >https://www.rentboard.ca/
                        </Link>
                    </View>
                </View>

                <Text style={styles.title}>Food Prices</Text>
                <View style={styles.border}>
                    <VStack space={3} divider={<Divider />} w="100%">
                        {
                            foods.map(food => (
                                <HStack key={food.id} alignItems={'center'} space={3} justifyContent="space-between">
                                    <Image style={{ width: 40, height: 40 }}
                                        source={food.icon} />
                                    <Text style={styles.text}>{food.title}</Text>
                                    <Text
                                        style={[styles.text, {
                                            fontWeight: '700',
                                            color: colors.lightblue
                                        }]}>${food.price}</Text>
                                </HStack>
                            ))
                        }

                    </VStack>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Text
                            style={[
                                styles.text, {
                                    fontStyle: 'italic',
                                    color: colors.blue,
                                    fontWeight: '700',
                                    marginTop: 20,
                                }]}>
                            Source:</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.expatistan.com/cost-of-living/toronto'
                        >https://www.expatistan.com
                        </Link>


                    </View>
                </View>

                <Text style={styles.title}>Transportation Prices</Text>
                <View style={styles.border}>
                    <VStack space={3} divider={<Divider />} w="100%">
                        {
                            transports.map(item => (
                                <HStack key={item.id} alignItems={'center'} space={3} justifyContent="space-between">
                                    <Image style={{ width: 40, height: 40 }}
                                        source={item.icon} />
                                    <Text style={styles.text}>{item.title}</Text>
                                    <Text
                                        style={[styles.text, {
                                            fontWeight: '700',
                                            color: colors.lightblue
                                        }]}>${item.price}</Text>
                                </HStack>
                            ))
                        }

                    </VStack>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Text
                            style={[
                                styles.text, {
                                    fontStyle: 'italic',
                                    color: colors.blue,
                                    fontWeight: '700',
                                    marginTop: 20,
                                }]}>
                            Source:</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.ttc.ca/Fares-and-passes'
                        >https://www.ttc.ca/
                        </Link>


                    </View>
                </View>


                {/* Disclaimer */}
                <View style={styles.disclaimer}>
                    <Text style={[styles.text, { fontStyle: 'italic', color: colors.primary, fontWeight: '700', marginTop: 20, }]}>
                        ** All prices listed are an average as of January 2022 and can change higher or lower at any moment.**</Text>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
    },

    title: {
        fontFamily: fonts.title,
        color: colors.blue,
        fontSize: titleSize,
        marginTop: 10,
        marginBottom: 10,

    },
    text: {
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: textSize,
        lineHeight: 20,

    },
    border: {
        width: '100%',
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 8,
        padding: 10,
        marginBottom: 30,

    },
    disclaimer: {
        marginBottom: 30,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        height: 200,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});


export default Ontario;