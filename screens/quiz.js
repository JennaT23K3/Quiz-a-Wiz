import React from 'react'
import {useEffect, useState} from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'

const shuffleArray=(array)=>{
    for (let i = array.lenght - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) =>{
    const [questions, setQuestions] = useState();
    const [ques,setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore]= useState(0);

    const getQuiz=async()=>{
        const url='APIGOESHERE';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
    };
    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options= [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)

        return options
    }

    const handleSelectOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+1)
        }
        if(ques!==9){
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
        if(ques===9){
            handleShowResult()
        }
    }

const handleShowResult=()=>{
    navigation.navigate('Result',{
        score: score
    })
}

    return(
        <View style={styles.container}>
            {questions &&(
            <View style={styles.parent}>
            <View style={styles.top}>
                <Text style={styles.question}>Q.{decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[0])}>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[1])}>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[2])}>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[3])}>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>

{ques!==9 &&           
                <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>}
                </View>
{ques===9 &&           
                <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                    <Text style={styles.buttonText}>SHOW RESULTS</Text>
                </TouchableOpacity>}

                </View>

                )}
        </View>  
    )
};
export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    top:{
        marginVertical: 16,
    },
    options:{
        marginVertical: 16,
        flex: 1,
    },
    bottom:{
        marginBottom: 12,
        paddingVertical: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button:{
        backgroundColor: '#724cf9',
        padding: 20,
        paddingHorizontal: 16,
        borderRadius: 16,
        aligItems: 'center',
        marginBottom: 30,
        },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
    question:{
        fontSize: 18,
        color: '#3a0ca3',
        fontWeight: 'bold',
    },
    option:{
        fontSize: 18,
        fontWeight: '500',
        color: '#724cf9',
    },
    optionButton:{
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 6,
        backgroundColor: '#bdb2ff',
        borderRadius: 12,
    },
    parent:{
        height: '100%',
    }
});
