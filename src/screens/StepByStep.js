import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { VStack, Link, Divider } from 'native-base';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native-paper';


const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017; 
const StepByStep = () => {
    return (
        <ScrollView >
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/step.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Step by Step Guide</Text>
                <View style={styles.border}>
                    <Text style={styles.title}> STEP 1 - Language Testing </Text>
                    <Text style={styles.text}>You must prove your language skills by taking an approved language test.
                        Schedule your test with an agency approved by IRCC and pay the costs.
                        Keep your original test in a safe place as we will require it with your immigration
                        application for residency.</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', textAlign: 'center', fontStyle: 'italic' }]}> You can take any of these approved language tests:</Text>
                    <Text style={styles.title}> English</Text>
                    <VStack divider={<Divider />} w="100%" >
                        <Text style={[styles.text, { color: colors.lightblue, }]}> -CELPIP: Canadian English Language Proficiency Index Program-
                            You must take the CELPIP-General test, we don't accept the General-LS test for Express Entry</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - IELTS: International English Language Testing System-
                            You must take the General Training option, we don't accept the Academic option for Express Entry</Text>

                        <Text style={styles.title}>French</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - TEF Canada: Test d'évaluation de français, including:</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Compréhension de l'écrit</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Compréhension de l'oral</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Expression écrite</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Expression orale</Text>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link
                                _text={{ color: colors.lightblue }}
                                href='https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html' // calgarytransit.com (maybe restric for other countries)
                            >https://www.canada.ca
                            </Link>
                        </View>
                    </VStack>
                </View>

                <View style={styles.border}>
                    <VStack >
                        <Text style={styles.title}>STEP 2 - Enter Into Express Entry</Text>
                        <Text style={styles.text}>Express Entry is an online system that Immigration Canada uses to manage applications for permanent residence from skilled workers. We send invitations to apply to the candidates
                            with the highest scores in the pool.</Text>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontStyle: 'italic',
                                        color: colors.blue,
                                        fontWeight: '700',
                                        marginTop: 20,
                                    }]}>
                                Please follow the link provided below as the information can change at any time.*</Text>
                            <Link
                                _text={{ color: colors.lightblue }}
                                href='https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html' // calgarytransit.com (maybe restric for other countries)
                            >http://www.canada.ca
                            </Link>


                        </View>

                    </VStack>
                </View>



                <View style={styles.border}>
                    <VStack>
                        <Text style={styles.title}> STEP 3 - Get educational Assessment</Text>
                        <Text style={styles.text}>You must get your educational assessment from the organization designated by the Regulatory Board . The board will also tell you what work you can or can not do while you are in the licensing process.
                            You MUST contact the Regulatory Board if your career is regulated. If your career is not regulated you can proceed to get an education assessment from any authorized by Immigration Canada found here :</Text>
                        <Text style={styles.title}>Designated Organizations </Text>
                        <Text style={[styles.text, { fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }]}> You must use one of these designated organizations: </Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Comparative Education Service – University of Toronto School of Continuing Studies
                            designated: April 17, 2013</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - International Credential Assessment Service of Canada
                            designated: April 17, 2013</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - World Education Services
                            designated: April 17, 2013 </Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - International Qualifications Assessment Service (IQAS)
                            designated: August 6, 2015</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}>International Credential Evaluation Service
                            designated: August 6, 2015</Text>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontStyle: 'italic',
                                        color: colors.blue,
                                        fontWeight: '700',
                                        marginTop: 20,
                                    }]}>
                                Please follow the link provided below as the information can change at any time.*</Text>
                            <Link
                                _text={{ color: colors.lightblue }}
                                href='http://www.canada.ca/' // calgarytransit.com (maybe restric for other countries)
                            >http://www.canada.ca
                            </Link>


                        </View>
                    </VStack>
                </View>

                <View style={styles.border}>
                    <Text style={styles.title}> STEP 4 - Apply to Job Boards </Text>
                    <Text style={styles.text}>Many job boards allow you to post your resume online and this is a great way to help your job search. This allows your resume to be viewed by thousands of potential employers and recruiters throughout the country. Below are listings of online job boards that
                        allows you to upload your resume for FREE.</Text>
                    <Text style={styles.text}> You can take any of these approved language tests:</Text>
                    <Text style={styles.title}> JOB BOARDS</Text>

                    <VStack divider={<Divider />} w="100%">
                        <Text style={styles.title}> Canadian Job Bank</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.jobbank.gc.ca/'
                        >http://www.jobbank.gc.ca/
                        </Link>

                        <Text style={styles.title}> Indeed Jobs</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.indeed.ca/'
                        >http://www.indeed.ca/
                        </Link>

                        <Text style={styles.title}> Canada Jobs</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.canadajobs.com/'
                        >http://www.canadajobs.com/
                        </Link>

                        <Text style={styles.title}> Monster Jobs</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.monster.ca/'
                        >http://www.monster.ca/
                        </Link>

                        <Text style={styles.title}> Workopolis Jobs</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.workopolis.com/'
                        >http://www.workopolis.com/
                        </Link>

                        <Text style={styles.title}> Career Builder Jobs</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='http://www.careerbuilder.ca/'
                        >http://www.careerbuilder.ca/
                        </Link>
                    </VStack>
                </View>

                <View style={styles.border}>
                    <Text style={styles.title}> STEP 5 - Use Linkedin for Job Search </Text>
                    <Text style={styles.text}>Most employers and recruitment agencies today are using social media to source the right candidates. This makes
                        social network sites an essential forum
                        to advertise your skills. In Canada, LinkedIn is used extensively for professional networking and is a great source for you to increase your professional visibility. Linkedin is also an excellent way for you to network online with other industry professionals.</Text>
                    <Text style={styles.title}> LinkedIn Tips for Job Search</Text>
                    <VStack divider={<Divider />} w="100%">
                        <Text style={[styles.text, { color: colors.lightblue, }]}> -  Ensure your profile is complete and updated. Use your LinkedIn profile like a
                            resume and provide prospective employers with detailed information about your skills and experiences.</Text>

                        <Text style={[styles.text, { color: colors.lightblue, }]}> - Find and network with others.</Text>
                        <Text style={[styles.text, { color: colors.lightblue, }]}> - The more connections you have, the better
                            your chances of finding someone who can help with your job search.</Text>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link
                                _text={{ color: colors.lightblue }}
                                href='https://ca.linkedin.com/'
                            >https://ca.linkedin.com/
                            </Link>

                        </View>
                    </VStack>

                </View>
                <View style={styles.border} >
                    <Text style={styles.title}> STEP 6 - Ask your Question </Text>
                    <Text style={styles.text}>Send us an email at <Text onPress={() => Linking.openURL('mailto:info@globalpromotions.ca')} style={{color: colors.lightblue}}>info@globalpromotions.ca</Text> and ask question for a Canadian relocation specialist.</Text>

                    <Button onPress={() => { Linking.openURL('mailto:info@globalpromotions.ca') }} icon='email' mode="contained" style={{ 
                        width: 250, 
                        alignSelf: 'center', 
                        backgroundColor: 'red', 
                        marginVertical: 10 }} > Send email </Button>

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
        lineHeight: 26,
        marginTop: 8,

    },
    border: {
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 8,
        padding: 4,
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

export default StepByStep;