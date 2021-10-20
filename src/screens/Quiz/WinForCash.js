import React from 'react';
import { View, Text,ScrollView,Dimensions,StyleSheet,TouchableOpacity,RefreshControl } from 'react-native';
import CardCenterComp from '../../componnents/Quiz/cardCenterComp';
import CategoryCard from '../../componnents/Quiz/categoryCard'
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import { styles } from '../../styles/authStyles';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Heading from '../../componnents/home/headingComp';
import { repository } from '../../utiles/repository';
import ContentLoader from "react-native-easy-content-loader";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../../navigation/navigationType'
const Width=Dimensions.get('window').width;
import {useSelector} from 'react-redux'
export default function () {
    const navigation=useNavigation();
    let [showAnimation, setshowAnimation] = React.useState(true);
    let [message, setmessage] = React.useState("");
    let [quiz,setquiz]=React.useState([]);
    let [quizCategories,setquizCategories]=React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    let [isplaybale,setisplaybale]=React.useState(false);
    const userr=useSelector(x=>x.userReducer);

    const onRefresh = React.useCallback(() => {
    
      (async function(){
          await fetchFamily();
          setRefreshing(false);
    
      })();
    }, []);
    const fetchFamily= async function () {
        try {
            const checkQuiz=await repository.quiz_play({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x);
            console.log(checkQuiz,"Sadas")
            if(checkQuiz.data && checkQuiz.data.success && checkQuiz.data.success==true)
            {

                
                setisplaybale(true);
            
                const { data, status } = await repository.quiz({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
                if (status == 200 && data && data.success == true) {

                    
                if (data.response.quizCategories)
                    {
                        setquizCategories(data.response.quizCategories)
                    }
                if (data.response.quiz)
                    {  
                        
                        setquiz(data.response.quiz)
                    }
                    
                setshowAnimation(false);
            }
           
            }
            else
            {
                console.log(checkQuiz.data)
                alert(checkQuiz.data)
                if(checkQuiz.data && checkQuiz.data.message)
                setmessage(checkQuiz.data.message);
                setshowAnimation(false);
                setisplaybale(false);
            }
            console.log(checkQuiz.data,"check quiz,1")
            
        }
        catch (e) {
            setshowAnimation(false);
        }
    };
    
    React.useEffect(() => {
        setshowAnimation(true);

        (async function(){
            await fetchFamily();
        })();
      

    }, []);
    const ResultView = ({ image, name, type,x }) => {
        return <View >
            <Card style={{borderRadius:10}}>
        <Card.Cover style={{height:'65%',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{ uri: image}} />
        <Card.Content>
      <Title numberOfLines={1} style={[styles.mainTitleHead1,{marginTop:10,textAlign:'center'}]}>{name}</Title>
         </Card.Content>
      </Card>
        </View>
    }
    return <>
        <View style={[{backgroundColor:'white',flex:1}]}>
        <TopDrawer/>
<View style={styles.ctr}>
<ScrollView   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
    <View style={{marginTop:RFValue(20)}}>
    <Heading head="Play & Earn" label="Play Quiz" type={true}  />
            <Card >
               <Card.Cover style={{borderRadius:20}} resizeMode='contain' source={require('../../images/quiz/quiz.png')}/>
                    
            </Card>
            {/* <CardCenterComp  style={{backgroundColor: '#2a2b31'}}/> */}
            {

                isplaybale==true?<>
                  <Heading head="Categories" label="Select Quiz category" type={true}  />
            {
                 showAnimation==true?<View style={Cardstyles.container}>
                     {
                         Array.from([1, 2, 3,4,5], x =><View style={[Cardstyles.box]}><ContentLoader  
                            pRows={1}
                            tHeight={Width/3}
                            pHeight={Width/15}
                            tWidth="100%"
                            pWidth="100%"
                            titleStyles={{marginTop:5}}
                                  listSize={1}
                                  active
                                  secondaryColor="rgba(207, 207, 207,1)"
                            /></View>)
                     }
                   
                 </View>:<View style={Cardstyles.container}>
{   
                         quizCategories.map((x, i) => <TouchableOpacity onPress={()=>{
                            navigation.navigate(Nav.QuizQuestion,{x:quiz.find(y=>x.id==y.id)})
                         }} style={[Cardstyles.box]} key={i}><ResultView i={i}  x={x} image={x.image ? x.image : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"} name={x.name ? x.name : ""} type={x.type ? x.type : ""} /></TouchableOpacity>)
}
                 </View>
                }
                </>:<>
                <Text style={[styles.mainpara,{fontSize:18,textAlign:'center',marginTop:'10%'}]}>{message}</Text>
                </>
            }
          
    </View>
    </ScrollView>
  
</View>
    
    </View>
    </>
}

const Cardstyles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    box: {
      flexBasis:Width/2.55,
      height: Width/2,
      margin: 10,
      marginBottom:50
    }

  });