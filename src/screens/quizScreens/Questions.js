import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import QuestionButton from '../../components/quizComponets/opttionButton';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
//import CircularProgress from '../../components/quizComponets/clockComp'
import Success from '../../components/quizComponets/sucessComp';
//import CLock from '../../components/quizComponets/clockComp'

export default function () {

   
    const [Questions, setQuestions] = useState([
        {
            id: '1',
            question: 'An attribute that is not part of any candidate key is known as',
            time: 10,
            amount: '2',
            correctAnswer: '2',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '1',
                answerr: 'sub-prime attribute'
            },
            {
                id: '2',
                answerr: 'non-prime attribute'
            },
            {
                id: '3',
                answerr: 'sub-candidate key'
            },
            {
                id: '4',
                answerr: 'non-candidate key'
            },
            ],
            ansStatus: 2,
        },
        {
            id: '2',
            question: 'Which of the follow is not the degree of relationship?',
            time: 15,
            amount: '3',
            correctAnswer: '3',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '5',
                answerr: 'Single'
            },
            {
                id: '6',
                answerr: 'Binary'
            },
            {
                id: '7',
                answerr: 'Ternary'
            },
            {
                id: '8',
                answerr: 'n-ary'
            },
            ],
            ansStatus: 0,
        },
        {
            id: '3',
            question: 'The degree of the relationship is',
            time: 5,
            amount: '5',
            correctAnswer: '1',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '9',
                answerr: 'number of Tables in a relationship'
            },
            {
                id: '10',
                answerr: 'number of entities in a relationship'
            },
            {
                id: '11',
                answerr: 'number of Row & Columns in a relationship'
            },
            {
                id: '12',
                answerr: 'number of participating entities in a relationship'
            },
            ],
            ansStatus: 0,
        },
        {
            id: '4',
            question: 'How many rules in “CODD’S RULES” of Relational Model of database systems?',
            time: 20,
            amount: '2',
            correctAnswer: '4',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '13',
                answerr: '11'
            },
            {
                id: '14',
                answerr: '12'
            },
            {
                id: '15',
                answerr: '13'
            },
            {
                id: '16',
                answerr: '14'
            },
            ],
            ansStatus: 0,
        },
        {
            id: '5',
            question: 'Every attribute has some predefined value scope that is called',
            time: 15,
            amount: '2',
            correctAnswer: '1',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '17',
                answerr: 'Tuple'
            },
            {
                id: '18',
                answerr: 'Tables'
            },
            {
                id: '19',
                answerr: 'Attribute domain'
            },
            {
                id: '20',
                answerr: 'Relation schema'
            },
            ],
            ansStatus: 0,
        },
        {
            id: '6',
            question: 'An attribute of a table cannot hold multiple values is the property of',
            time: 15,
            amount: '2',
            correctAnswer: '4',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '21',
                answerr: 'First normal form (1NF)'
            },
            {
                id: '22',
                answerr: 'Second normal form (2NF)'
            },
            {
                id: '23',
                answerr: 'Third normal form (3NF)'
            },
            {
                id: '24',
                answerr: 'Fourth normal form (4NF)'
            },
            ],
            ansStatus: 0,
        }

        ,
        {
            id: '7',
            question: 'A key that consists of more than one attribute to uniquely identify rows in a table is called',
            time: 15,
            amount: '3',
            correctAnswer: '3',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '25',
                answerr: 'Composite key'
            },
            {
                id: '26',
                answerr: 'Candidate key'
            },
            {
                id: '27',
                answerr: 'Primary key'
            },
            {
                id: '28',
                answerr: 'Foreign key'
            },
            ],
            ansStatus: 0,
        }

        ,
        {
            id: '8',
            question: 'In hierarchical model, data is organized into',
            time: 15,
            amount: '4',
            correctAnswer: '2',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '29',
                answerr: 'logical structure'
            },
            {
                id: '30',
                answerr: 'physical structure'
            },
            {
                id: '31',
                answerr: 'tree like structure'
            },
            {
                id: '32',
                answerr: 'none of them'
            },
            ],
            ansStatus: 0,
        }
        ,
        {
            id: '9',
            question: 'The key selected from the sets of candidate keys by database designer is called',
            time: 15,
            amount: '4',
            correctAnswer: '1',
            hasVideo: false,
            videoLink: '',
            ansewers: [{
                id: '33',
                answerr: 'Primary key'
            },
            {
                id: '34',
                answerr: 'Secondary Key'
            },
            {
                id: '35',
                answerr: 'Foreign key'
            },
            {
                id: '36',
                answerr: 'Super key'
            },
            ],
            ansStatus: 0,
        }

    ]);
    const [Answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
    const [selectedOption, setselectedOption] = useState();
    const [isCompleted, setisCompleted] = useState(false);
    //const [time,setTime]=useState(5);
    const handleSelectOption = (value) => {
        setselectedOption(value);
    }

    const handleNextQuestion = () => {

        const newAns = [...Answers]
        newAns.push({
            questionId: Questions[currentQuestionIndex].id,
            value: selectedOption,
            correctAnswer: Questions[currentQuestionIndex].correctAnswer,
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
            setAnswers(newAns);
            setisCompleted(true);
        }
        //Questions.findIndex(x=>x.ansStatus==2)+1
    }

    const handleNextEmptyQuestion = () => {

        const newAns = [...Answers]
        newAns.push({
            questionId: Questions[currentQuestionIndex].id,
            value: 0,
            correctAnswer: Questions[currentQuestionIndex].correctAnswer,
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

    return (isCompleted == true ? <Success />
        :

        <View style={{ flex: 1, backgroundColor: '#101529', paddingLeft: 10 }}>
            <Text style={{ color: '#393e55', fontSize: 18, fontFamily: 'Ubuntu-Bold', marginTop: 10 }}>Category Name</Text>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Text style={{ color: '#e4e5e7', fontSize: 25, fontFamily: 'Ubuntu-Bold', marginTop: 10 }}>Question</Text>
                <Text style={{ color: '#e4e5e7', fontSize: 35, fontFamily: 'Ubuntu-Bold', marginTop: 4, marginLeft: 5 }}>{String(currentQuestionIndex).padStart(2, '0')}</Text>
                <Text style={{ color: '#393e55', fontSize: 25, fontFamily: 'Ubuntu-Medium', marginTop: 10 }}>/{String(Questions.length - 1).padStart(2, '0')}</Text>
                <View style={{ alignSelf: 'flex-end', marginLeft: '28%' }}>

                    <CountdownCircleTimer
                        key={currentQuestionIndex}
                        isPlaying
                        duration={Questions[currentQuestionIndex].time}
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
                    return <View style={{ width: 20, height: 3, backgroundColor: (x.ansStatus == 2 ? "white" : x.ansStatus == 1 ? "#0d8e73" : "#585e79"), marginRight: 10 }}></View>
                }
                )}
            </View>
            <View style={{ paddingTop: 50 }}>
                <ScrollView>
                    <Text style={{ color: 'white', fontFamily: 'Ubuntu-Bold', fontSize: 16 }}>{Questions[currentQuestionIndex].question}</Text>
                    {
                        <QuestionButton select={handleSelectOption} style={{ color: 'white' }} ansewers={Questions[currentQuestionIndex].ansewers}></QuestionButton>
                        //Questions[currentQuestionIndex].ansewers.map(x=><></>)
                    }
                    <Button mode='contained' style={{ backgroundColor: "#129d81" }} onPress={() => handleNextQuestion()}>{(Questions.length - 1 == currentQuestionIndex ? "Submit" : "Next")}</Button>
                </ScrollView>
            </View>
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