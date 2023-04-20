import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { VStack, Link, Divider } from 'native-base';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017; 

const JobMarket = () => {
    return (
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/job.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Find a Job</Text>

                <View style={styles.border}>
                    <Text style={styles.title}> Apply to Job Boards </Text>
                    <Text style={styles.text}>Many job boards allow you to post your resume online and this is a great way to help your job search. This allows your resume to be viewed by thousands of potential employers and recruiters throughout the country. Below are listings of online job boards that
                        allows you to upload your resume for <Text style={{ color: colors.primary }}>FREE</Text>.</Text>

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
                    <Text style={styles.title}>Canadian Resume Rules</Text>
                    <Text style={[styles.text, { fontWeight: 'bold', color: colors.primary }]}>In Canada employers and Recruiters
                        WILL NOT ACCEPT ANY RESUMES THAT CONTAIN ANY OF THE FOLLOWING: </Text>
                    <VStack divider={<Divider />} w="100%" >
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Your Photograph
                        </Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Your Religion
                        </Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> - Your Age
                        </Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}>
                            - Your Family Information.</Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}>
                            - If You Have a Disability.</Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}>
                            - Your Family Status (Married/Single).</Text>
                        <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}>
                            - Or any other information that would violate our Chartered Human Rights Act.</Text>

                    </VStack>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: colors.blue, fontWeight: '700', fontStyle: 'italic', marginTop: 20, marginBottom: 20 }}>  Source:</Text>
                        <Link
                            _text={{
                                color: colors.lightblue
                            }}
                            mt={1}
                            href="https://www.chrc-ccdp.gc.ca/en">http://www.chrc-ccdp.gc.ca/</Link>

                    </View>
                </View>

                <View style={styles.border}>
                    <Text style={styles.title}> Resume Builders </Text>
                    <Text style={styles.text}>Below are the Three (3 ) resume and cover letter websites that offer great templates to build yours for FREE. If you prefer not to do this yourself there are many companies you can find online that provides these
                        services for a fee.</Text>

                    <VStack divider={<Divider />} w="100%">
                        <Text style={styles.title}> Resume- Now</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.resume-now.com'
                        >www.resume-now.com
                        </Link>

                        <Text style={styles.title}> Resume Coach</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.resumecoach.com'
                        >www.resumecoach.com
                        </Link>

                        <Text style={styles.title}> My Perfect Resume</Text>
                        <Link
                            _text={{ color: colors.lightblue }}
                            href='https://www.myperfectresume.com'
                        >www.myperfectresume.com
                        </Link>

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
        marginTop: 10,
        marginBottom: 10,

    },
    text: {
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: textSize,
        lineHeight: 24,
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

export default JobMarket;