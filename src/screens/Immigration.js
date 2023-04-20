import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { VStack, Link, Divider } from 'native-base';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const programs = [
    { id: '01', name: 'Federal Skilled Worker Program' },
    { id: '02', name: 'Provincial Nominee Programs' },
    { id: '03', name: 'Canadian Experience Class' },
    { id: '04', name: 'Entrepreneurs and self- employed persons' },
    { id: '05', name: 'Federal skilled trades class' },
    { id: '06', name: 'Investors' },
    { id: '07', name: 'Start-up business class' },
    { id: '08', name: 'Home Child-Care Provider Pilot and Home Support Worker Pilot' },
    { id: '09', name: 'Caring for children and caring for people with high medical needs classes' },
    { id: '10', name: 'Interim Pathway for Caregivers' },
    { id: '11', name: 'Live-in Caregiver Program' },
    { id: '12', name: 'Immigrant Investor Venture Capital class' },
    { id: '13', name: 'Rural and Northern Immigration Pilot Program' },
    { id: '14', name: 'Temporary Resident to Permanent Resident Pathway' },
]

const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017; 

const Immigration = () => {
    return (
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/passport.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Immigration Programs</Text>

                <View style={styles.border}>
                    <Text style={styles.title}>CANADIAN EXPRESS ENTRY</Text>
                    <VStack divider={<Divider />} w="100%" >

                        <Text style={styles.text}>Canada
                            has <Text style={{ color: colors.primary, fontWeight: '700' }} >
                                MANY</Text> programs for work, study and permanent residency. Express Entry manages applications for
                            permanent residence under these federal immigration programs:
                        </Text>

                        {programs.map(program => (
                            <View key={program.id} style={styles.programsList}>
                                <Text
                                    style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}
                                > - {program.name}</Text>
                            </View>

                        ))}

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontStyle: 'italic', color: colors.blue, fontWeight: '700' }}>For more detailed information, follow this link: </Text>
                            <Link
                                mt={1}
                                href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes.html"
                                _text={{
                                    color: colors.lightblue
                                }}
                            >https://www.canada.ca</Link>
                        </View>
                    </VStack>
                </View>



                <View style={styles.border}>
                    <VStack>
                        <Text style={styles.title}> Federal Skilled Worker (Express Entry)</Text>

                        <Text style={styles.title}>How this program works</Text>
                        <Text style={[styles.text, { fontStyle: 'italic', fontWeight: 'bold', }]}>
                            This program has minimum requirements for: </Text>
                        <VStack divider={<Divider />} w="100%" >
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Skilled work experience </Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Language Ability</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Education</Text>
                            <Text style={[styles.text, { fontStyle: 'italic', fontWeight: 'bold' }]}>You must meet all the minimum requirements to be eligible.</Text>
                        </VStack>


                        <Text style={styles.title}>Selection factors</Text>
                        <Text style={[styles.text, { fontStyle: 'italic', fontWeight: 'bold' }]}>If you meet all the minimum requirements, we'll then assess your application based on: </Text>
                        <VStack divider={<Divider />} w="100%" >
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Age</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Education</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Work experience</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Whether you have a valid job offer</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - English and/or French language skills</Text>
                            <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Adaptability (how well you're likely to settle here)</Text>
                        </VStack>

                        <Text style={[styles.text, { fontStyle: 'italic', fontStyle: 'italic', fontWeight: '700', }]}>These factors are part of a 100-point grid used to assess eligibility for the Federal Skilled Worker Program.</Text>

                    </VStack>

                </View>

                <View style={styles.border}>
                    <Text style={styles.title}>IMMIGRATION CONSULTANTS</Text>
                    <VStack w="100%" >
                        <Text style={styles.text}>The
                            Government of Canada treats everyone <Text style={{ color: colors.primary, fontWeight: '700' }} >
                                EQUALLY</Text> whether they use a paid representative or
                            not. All forms and instructions you need to apply for a visa, a permit or citizenship are free and if you follow the instructions, you should be able to fill out the forms and
                            submit them yourself.
                        </Text>


                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>Source:</Text>
                            <Link _text={{
                                color: colors.lightblue
                            }}
                                mt={1}
                                href="https://www.canada.ca">www.canada.ca</Link>

                            <Text style={[styles.text, { fontStyle: 'italic', fontWeight: 'bold' }]}>
                                Verify that a Immigration consultant is authorized to represent you with Immigration Canada here:
                            </Text>
                            <Link
                                _text={{
                                    color: colors.lightblue
                                }}
                                mt={1}
                                href="https://www.iccrc-crcic.info">www.iccrc-crcic.info</Link>
                        </View>
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
        color: colors.blue,
        fontSize: titleSize,
        marginTop: 20,
        marginBottom: 10,

    },
    text: {
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: textSize,
        lineHeight: 22,
        marginTop: 8,

    },
    border: {
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 8,
        padding: 4,
        marginBottom: 30,
        width: '100%',

    },
    programsList: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
        padding: 8,
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

export default Immigration;