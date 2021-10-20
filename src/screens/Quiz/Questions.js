import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Animated,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import QuestionButton from '../../componnents/Quiz/opttionButton';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
//import CircularProgress from '../../components/quizComponets/clockComp'
import Success from '../../componnents/Quiz/sucessComp';
//import CLock from '../../components/quizComponets/clockComp'
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../../navigation/navigationType'
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp';
import { styles } from '../../styles/authStyles';
import { repository } from '../../utiles/repository';
import {useSelector} from 'react-redux'
import LottieView from 'lottie-react-native';

export default function (props) {
    console.log(props.route.params.x.questions,"Sddfsd")
    const navigation=useNavigation();
    const [Questions, setQuestions] = useState([]);
    const [Answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
    const [selectedOption, setselectedOption] = useState();
    const [isCompleted, setisCompleted] = useState(false);
    const [showAnimation, setshowAnimation] = React.useState(false);
    const userr=useSelector(x=>x.userReducer);

    //const [time,setTime]=useState(5);
    const handleSelectOption = (value) => {
        setselectedOption(value);
    }

    const handleNextQuestion = () => {

        const newAns = [...Answers]
        newAns.push({
            question_id: Questions[currentQuestionIndex]?Questions[currentQuestionIndex].id:0,
            answer_id: selectedOption,
            // correctAnswer: Questions[currentQuestionIndex]?Questions[currentQuestionIndex].correctAnswer:0,
        });

        if (currentQuestionIndex < Questions.length - 1) {
            if (selectedOption) {
                setAnswers(newAns);
                const updatedQuestions = [...Questions];
                updatedQuestions[currentQuestionIndex].ansStatus = 1;
                updatedQuestions[currentQuestionIndex + 1].ansStatus = 2;
                setQuestions(updatedQuestions);
                setcurrentQuestionIndex(currentQuestionIndex + 1);
                setselectedOption();
            } else {
                alert("Select answer");
            }

        }
        if (Questions.length - 1 == currentQuestionIndex) {
           
            if (selectedOption) {
              (async()=>{
              await  postData()
              })();
            } else {
                alert("Select answer");
            }
          
        }
        //Questions.findIndex(x=>x.ansStatus==2)+1
    }

    const handleNextEmptyQuestion = () => {

        const newAns = [...Answers]
        newAns.push({
            question_id: Questions[currentQuestionIndex]?Questions[currentQuestionIndex].id:0,
            answer_id: 0,
            // correctAnswer: Questions[currentQuestionIndex]?Questions[currentQuestionIndex].correctAnswer:0,
        });

        if (currentQuestionIndex < Questions.length - 1) {
            setAnswers(newAns);
            const updatedQuestions = [...Questions];
            updatedQuestions[currentQuestionIndex].ansStatus = 1;
            updatedQuestions[currentQuestionIndex + 1].ansStatus = 2;
            setQuestions(updatedQuestions);
            setcurrentQuestionIndex(currentQuestionIndex + 1);
            setselectedOption();

        }
        if (Questions.length - 1 == currentQuestionIndex) {
            setAnswers(newAns);
            setisCompleted(true);
        }
        //Questions.findIndex(x=>x.ansStatus==2)+1
    }
    React.useEffect(()=>{
        setQuestions(props.route.params.x.questions)
    },[])

    const postData = async () => {

        try
        {
            setshowAnimation(true)
            console.log(Answers,"sadsdsd")
            const { data, status } = await repository.quiz_submit({questions:Answers},{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }
            ).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setisCompleted(true);
                setshowAnimation(false)
                setAnswers(newAns);
                console.log(Answers,"sdsh");
            }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch(e)
        {
            setshowAnimation(false)

        }     
        
    }
    return (isCompleted == true ? <Success />
        :
            
        <View style={[{backgroundColor:'white',flex:1}]}>
        <TopDrawer/>

        <ScrollView>
        <View style={styles.ctr}>
        <Heading head="Categories" label="Select Quiz category" type={true}  />

            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Text style={{ color: '#757575', fontSize: 25, fontFamily: 'PoppinsBold', marginTop: 10 }}>Question</Text>
                <Text style={{ color: '#757575', fontSize: 35, fontFamily: 'PoppinsBold', marginTop: 4, marginLeft: 5 }}>{String(currentQuestionIndex).padStart(2, '0')}</Text>
                <Text style={{ color: '#424242', fontSize: 25, fontFamily: 'PoppinsMedium', marginTop: 10 }}>/{String(Questions.length - 1).padStart(2, '0')}</Text>
                <View style={{ alignSelf: 'flex-end', marginLeft: '15%' }}>

                    <CountdownCircleTimer
                        key={currentQuestionIndex}
                        isPlaying
                        duration={props.route.params.x.questions[0]?props.route.params.x.questions[0].time:0}
                        // duration={1000}
                        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                        strokeWidth={8}
                        size={60}
                        onComplete={()=>{
                            handleNextEmptyQuestion()
                        }}
                     >
                        {({ remainingTime, animatedColor }) => (
                            <Animated.Text style={{ color: animatedColor }}>
                                {remainingTime}
                            </Animated.Text>
                        )}
                    </CountdownCircleTimer>
                </View>
            </View>
            
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 10 }}>
                {Questions.map(x => {
                    return <View style={{ width: 20, height: 3, backgroundColor: (x.ansStatus == 2 ? "#757575" : x.ansStatus == 1 ? "#0d8e73" : "#585e79"), marginRight: 10 }}></View>
                }
                )}
            </View>
            <View style={{ paddingTop: 50 }}>
            <Text style={{  fontFamily: 'PoppinsBold', fontSize: 16,color:'#424242' }}>{Questions[currentQuestionIndex]?Questions[currentQuestionIndex].question:""}</Text>
                    {
                        <QuestionButton select={handleSelectOption} style={{ color: 'white' }} ansewers={Questions[currentQuestionIndex]?Questions[currentQuestionIndex].answers:[]}></QuestionButton>
                        //Questions[currentQuestionIndex].ansewers.map(x=><></>)
                    }
                      <TouchableOpacity disabled={showAnimation} onPress={() => handleNextQuestion()} mode="contained" style={[styles.buttonMain, styles.mt5, { marginBottom: 20 }, styles.themeBackColor, styles.border1]} >
                            {showAnimation ? <LottieView

                                style={[{
                                    width: 100,
                                    height: 40,
                                    alignSelf: 'center'
                                }, styles.themeBackColor]}
                                autoPlay={true}
                                loop={true}
                                source={require('../../animations/New/2.json')}
                            // OR find more Lottie files @ https://lottiefiles.com/featured
                            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                            /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium', color: 'white' }}>{(Questions.length - 1 == currentQuestionIndex ? "Submit" : "Next")}</Text>
                            }
                        </TouchableOpacity>
                    {/* <Button mode='contained' style={{ backgroundColor: "#21c5df",marginBottom:10 ,borderRadius:10}} labelStyle={{color:'white',padding:6}} >{}</Button> */}
         
            </View>
      
        </View>
        </ScrollView>
         </View>


    )
}


/*
quizeQuestion: [

    {
        id: '1',
        category: 'Science',

    },

]

*/