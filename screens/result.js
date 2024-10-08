import React from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
import Title from '../components/title';

const Result = ({navigation,route}) =>{
    const {score} = route.params
    const resultBanner= score>50? "https://i.ibb.co/Cm0SFr0/poo-win.png":"https://i.ibb.co/fv954Z8/poo-lose.png"
    const resultMessage= score>50? "You are so Epic that your Poo is Purple!" : "Better Luck Next Time!"

    return(
<View style={styles.container}>
<Title titleText='RESULTS'/>
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
<Image source={{
uri:resultBanner}}
style={styles.banner}
resizeMode='contain'/>
<Text style={styles.resultMessage}>{resultMessage}</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
<Text style={styles.buttonText}>Again!</Text>
</TouchableOpacity>
</View>
    );
};

export default Result
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
    scoreValue:{
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
        color: '#3a0ca3',
    },
    resultMessage:{
        fontSize: 18,
        color: '#3a0ca3',  
    },
})