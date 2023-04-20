import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

import { transports } from '../../constants/british-columbia/transports';
import { foods } from '../../constants/british-columbia/foods';
import { real_estate } from '../../constants/british-columbia/real-estate';
import { rental } from '../../constants/british-columbia/rental';

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
const BritishColumbia = ({ route }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Real Estate Prices</Text>
            <View style={styles.border}>
                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        real_estate.map(item => (
                            <HStack key={item.id} alignItems={'center'} space={3} justifyContent="space-between">
                                <Icon as={item.id < '04' ? Entypo : MaterialIcons} name={item.icon} />
                                <Text style={styles.text}>{item.text}</Text>
                                <Text style={[styles.text, { fontWeight: '700', color: colors.secondary }]}>{item.price}</Text>
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
                                marginTop: 20
                            }]}>
                        Source:</Text>
                    <Link
                        _text={{ color: colors.lightblue }}
                        href='https://www.zolo.ca/vancouver-real-estate'
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
                                <Text style={[styles.text, { fontWeight: '700', color: colors.secondary }]}>{item.price}</Text>
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
                        href='https://www.rentboard.ca/vancouver'
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
                                        color: colors.secondary
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
                        href='https://www.expatistan.com/cost-of-living/vancouver'
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
                                        color: colors.secondary
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
                        href='https://www.translink.ca/transit-fares'
                    >https://www.translink.ca
                    </Link>


                </View>
            </View>


            {/* Disclaimer */}
            <View style={styles.disclaimer}>
                <Text style={[styles.text, { fontStyle: 'italic', color: colors.blue, fontWeight: '700', marginTop: 20, }]}>
                    ** All prices listed are an average as of January 2022 and can change higher or lower at any moment.**</Text>
            </View>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
    }
});


export default BritishColumbia;