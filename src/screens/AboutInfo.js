import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { HStack, Icon, VStack } from 'native-base';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017;

const AboutInfo = () => {
    return (
        <ScrollView bounces={false} >
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/ontario.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styles.title]}>Why Canada - Ontario?</Text>
                <View style={styles.border}>
                    <HStack alignItems={'center'} space={2}>
                        <Icon
                            as={MaterialIcons}
                            name="healing"
                            color={colors.blue}
                            size={30}
                        />
                        <Text style={styles.title}>Medical Coverage</Text>
                    </HStack>
                    <VStack >

                        <Text style={styles.text}>In Canada, our medical health care
                            is <Text style={{ fontFamily: fonts.title, color: colors.lightblue }}> FREE</Text> for
                            all permanent residents and citizens.
                            All doctor visits including hospital visits are
                            covered. We only pay for *vision car*dental
                            care, and *prescription drugs.
                        </Text>
                    </VStack>
                </View>

                <View style={styles.border}>
                    <HStack alignItems={'center'} space={2}>
                        <Icon
                            as={Entypo}
                            name="globe"
                            color={colors.blue}
                            size={30}
                        />

                        <Text style={styles.title}>Best Place to Live</Text>
                    </HStack>
                    <VStack >

                        <Text style={styles.text}>Canada is ranked among
                            the <Text style={{ fontFamily: fonts.title, color: colors.lightblue }}> TOP 3 </Text> Best
                            Countries in the world to live in. We are
                            multicultural, our economy is strong and we
                            have clean, and safe modern cities.
                        </Text>
                    </VStack>

                </View>

                <View style={styles.border}>
                    <HStack alignItems={'center'} space={2}>
                        <Icon
                            as={MaterialCommunityIcons}
                            name="human"
                            color={colors.blue}
                            size={30}
                        />
                        <Text style={styles.title}>Canadian Human Rights</Text>
                    </HStack>
                    <VStack >

                        <Text
                            style={styles.text}>
                            The Canadian Human Rights Act of 1977
                            <Text style={{ fontFamily: fonts.title, color: colors.lightblue }}> protects people </Text> from discrimination in areas of provincial and territorial jurisdiction, such as restaurants, stores, schools, housing and most workplaces.
                        </Text>
                    </VStack>

                </View>

                <View style={styles.border}>
                    <HStack alignItems={'center'} space={2}>
                        <Icon
                            as={FontAwesome5}
                            name="passport"
                            color={colors.blue}
                            size={30}
                        />

                        <Text style={styles.title}>Powerful Passport</Text>
                    </HStack>
                    <VStack >

                        <Text style={styles.text}>The Canadian passport is one of the
                            <Text style={{ fontFamily: fonts.title, color: colors.lightblue }}> TOP 10 </Text>
                            most powerful passport in the world.
                            Canadian passport holders can travel to
                            172 countries with no visa or allowed to get
                            a visa upon arrival.
                        </Text>
                    </VStack>

                </View>

                <View style={styles.border}>
                    <HStack alignItems={'center'} space={2}>
                        <Icon
                            as={MaterialIcons}
                            name="family-restroom"
                            color={colors.blue}
                            size={30}
                        />

                        <Text style={styles.title}>Family is Important!</Text>
                    </HStack>
                    <VStack >
                        <Text style={styles.text}>Canada supports and believes
                            in <Text style={{ fontFamily: fonts.title, color: colors.lightblue }}>FAMILY
                                REUNIFICATION </Text> and allows parents and
                            grandparents of permanent residents and
                            citizens to apply for a Super Visa allowing
                            visitor status for two year continuous stay.
                        </Text>
                    </VStack>

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
        fontSize: titleSize,
        color: colors.blue,
        marginTop: 10,
        marginBottom: 10,

    },
    text: {
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: textSize,
        lineHeight: 26,
        marginTop: 20,
        marginBottom: 20,

    },
    border: {
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 8,
        padding: 8,
        marginBottom: 30,

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

export default AboutInfo;