import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Image,View,Button} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Title titleText='Quiz-a-Wiz'/>
            <View style={styles.bannerContainer}>
            <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-512/free-quiz-icon-download-in-svg-png-gif-file-formats--questionnaire-examination-exam-online-course-pack-business-icons-3354814.png?f=webp&w=256'}}
            style={styles.banner}
            resizeMode='contain'/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}
            style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    }, 
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button:{
        width: '100%',
        backgroundColor: '#724cf9',
        padding: 20,
        borderRadius: 16,
        aligItems: 'center',
        marginBottom: 30,
        },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});