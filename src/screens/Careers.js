import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { HStack, Icon, VStack, Link, Select, CheckIcon, Divider } from 'native-base';
import { MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { jobs } from '../components/listItems/jobList';
import { Button } from 'react-native-paper'



// Responsive fontsize
const height = Dimensions.get('window').height;
const titleSize = height * 0.025;
const textSize = height * 0.017;

const Careers = () => {
    const [service, setService] = React.useState("");

    const filteredJobs = jobs.filter(job => job.label === service);

    const matchRegulated = [
        'Accountant',

    ]
    return (
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/career.png')} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Careers</Text>
                <View style={styles.border}>


                    <VStack >
                        <Text style={styles.title}>Canadian NOC System</Text>
                        <Text style={styles.text}>In Canada employers and Immigration
                            Canada use a system that classifies
                            every job title into a four digit code.
                            This is called
                            the <Text style={[styles.text, { color: colors.lightblue, fontWeight: '700' }]}> Nation Occupation Classification (NOC)
                            </Text> and it rules all the
                            framework for job titles, educational requirements, and
                            job duties on all jobs found in the Canadian market.
                        </Text>
                        <Text style={styles.text}>Immigration, Refugees and Citizenship Canada (IRCC)
                            uses the NOC to evaluate your work experience for
                            Immigration purposes. Employers use the NOC system to
                            define education and job skills needed for job postings.
                        </Text>

                    </VStack>
                </View>
                <Text style={styles.title}>Select an occupation to start </Text>

                
                <VStack alignItems="flex-start" space={4} style={{ marginBottom: 30 }} >


                    <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose a Job"
                        placeholder="Choose a Job"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setService(itemValue)}


                    >
                        {
                            jobs.map(job => (
                                <Select.Item key={job.id} label={job.title} value={job.label} />
                            ))
                        }


                    </Select>
                </VStack>

                {filteredJobs[0] === undefined ?
                    <Text style={styles.text}>No occupation selected.</Text>
                    :
                    <View style={styles.border}>
                        <VStack divider={<Divider />} w="100%">
                            <Text style={styles.title}>{filteredJobs[0]?.title} (NOC {filteredJobs[0].noc})</Text>
                            <View style={styles.imgContainer}>
                                <Image style={styles.image} source={filteredJobs[0]?.picture} />
                            </View>
                            <Text style={[styles.text, { color: colors.lightblue }]}>
                                Job Description: <Text style={styles.text}>{filteredJobs[0]?.description}</Text>
                            </Text>

                            <Text style={[styles.text, { color: colors.lightblue }]}>
                                Average Salary: <Text style={styles.text}>${filteredJobs[0]?.salary}</Text>
                            </Text>

                            <Text style={[styles.text, { color: colors.lightblue }]}>
                                NOC Code(s): <Text style={styles.text}>{filteredJobs[0]?.noc}</Text>
                            </Text>

                            <Text style={[styles.text, { color: colors.lightblue }]}>
                                Job Requirements: <Text style={styles.text}>{filteredJobs[0]?.requirements}</Text>
                            </Text>
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
                                More Info:</Text>
                            <Link
                                _text={{ color: colors.lightblue }}
                                href={filteredJobs[0]?.link}
                            >https://noc.esdc.gc.ca/
                            </Link>
                        </View>
                        <VStack divider={<Divider />} w="100%">
                            {filteredJobs[0]?.regulated ?
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={[styles.text, { color: colors.primary, fontWeight: '700', textAlign: 'center', marginTop: 40 }]}>
                                        This is a Regulated Occupation</Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10 }}>{filteredJobs[0]?.body}</Text>

                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text
                                            style={[
                                                styles.text, {
                                                    fontStyle: 'italic',
                                                    color: colors.blue,
                                                    fontWeight: '700',
                                                    marginTop: 20,
                                                }]}>
                                            More Info:</Text>
                                        <Link
                                            _text={{ color: colors.lightblue }}
                                            href={filteredJobs[0]?.regulated_link}
                                        >{filteredJobs[0]?.regulated_link}
                                        </Link>
                                    </View>
                                </View>

                                :
                                null}
                        </VStack>


                    </View>
                }
                <View style={styles.border}>


                    <VStack >
                        <Text style={[styles.title, { textAlign:'center' }]}>Career not listed? Find it here. </Text>
                        <Button onPress={() => {Linking.openURL('https://noc.esdc.gc.ca/')}} mode="contained" style={{ width: 250, alignSelf: 'center', backgroundColor: 'red' }} > Find your career </Button>

                    </VStack>
                </View>



                {/* <View style={styles.border}>
                    <Text style={[styles.text, {fontStyle: 'italic'}]}>You can search the NOC to find where an occupation is classified here:
                     <Link 
                     _text={{
                         color: colors.lightblue
                     }}
                     mt={4} 
                     href="https://noc.esdc.gc.ca/">https://noc.esdc.gc.ca/</Link>
                    </Text>
                
            </View> */}

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
        width: '100%',
    },
    text: {
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: textSize,
        lineHeight: 26,
        marginTop: 10,

    },
    border: {
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 8,
        padding: 6,
        marginBottom: 10,
        marginTop: 30,

    },
    imgContainer: {
        height: 200,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
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

export default Careers;