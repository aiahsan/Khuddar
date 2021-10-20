import React from 'react';
import { View, Text,ScrollView,Dimensions } from 'react-native';
import CardCenterComp from '../../componnents/Quiz/cardCenterComp';
import CategoryCard from '../../componnents/Quiz/categoryCard';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {styles} from '../../styles/authStyles'
const width = Dimensions.get('window').width;
import { Avatar } from 'react-native-paper';
import { repository } from '../../utiles/repository';
import ContentLoader from "react-native-easy-content-loader";
import {useSelector} from 'react-redux';

const ResultView=({user,rank})=>{
    return  <View style={[styles.felxRow,{justifyContent:'space-between',borderBottomWidth:1,borderColor:'#ededed',padding:10}]}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Avatar.Image  source={{uri:user.submitted_by&&user.submitted_by.image?user.submitted_by.image:'https://phowdimages.azureedge.net/cloud/pics/8137/p/c7bfc992b6614bf9a36057506e1bfc4c/1.jpg?preset=details'}} />
            <Heading head={user.submitted_by&&user.submitted_by.name?user.submitted_by.name:""}  style={{ color: '#717171',fontSize:14,marginLeft:12}}  />

                </View>
    <Heading head={"Rank: "+rank}   style={{ color: '#717171',fontSize:14}} />

    </View>
}


export default function () {
    const [result,setResult]=React.useState([]);
    let [showAnimation, setshowAnimation] = React.useState(false);

    const [rankdata,setRankData]=React.useState({
        rank:'',
        correct:'',
        earning:'',
    })
    const userr=useSelector(x=>x.userReducer);

    const fetchFamily= async function () {
        try {

            
            const { data, status } = await repository.quiz_result({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data,"gjgugigui")
                if (status == 200 && data && data.success == true) {


                if (data.response.result && data.response.result.result_json)
                    {
                        
                        setResult(data.response.result.result_json)
                        setRankData({
                            rank: data.response.result.rank,
                            correct:data.response.result.correct,
                            earning:data.response.result.earning,
                        })
                        // setsearchmembers(data.response.user.members)}
                        // dispatch(Add_All_members(data.response.user.members))
                setshowAnimation(false);
            }
            else {
                setshowAnimation(false);
            }
        }
        else
        {
            setshowAnimation(false);

        }
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
      

    }, [])
return <>
     <View style={[{backgroundColor:'white',flex:1}]}>
        <TopDrawer/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ctr}>
        <View >
        <Heading head="Daily Quiz Results" label="Please choose your service" type={true}  />

        </View>
        <CardCenterComp topusers={result} />
        <View style={[styles.mt5,styles.felxRow,{justifyContent:'space-between',borderBottomWidth:1,borderColor:'#ededed'}]}>
        <Heading head="Your Total Score"  style={{ color: '#717171',fontSize:14}}  />
        <Heading head={rankdata.correct}   style={{ color: '#717171',fontSize:14}} />

        </View>
        <View style={[styles.mt5,styles.felxRow,{justifyContent:'space-between',borderBottomWidth:1,borderColor:'#ededed'}]}>
        <Heading head="Your Today Rank"  style={{ color: '#717171',fontSize:14}}  />
        <Heading head={rankdata.rank}   style={{ color: '#717171',fontSize:14}} />

        </View>
        <View style={[styles.mt5,styles.felxRow,{justifyContent:'space-between',borderBottomWidth:1,borderColor:'#ededed'}]}>
        <Heading head="Total Earned Today"  style={{ color: '#717171',fontSize:14}}  />
        <Heading head={rankdata.earning}   style={{ color: '#717171',fontSize:14}} />

        </View>
        <Heading head="Today Results" style={styles.mt10} type={true} />
          
          { showAnimation==true?<ContentLoader
                 avatar
                 pRows={0}
                 tHeight={50}
                 
                 tWidth="95%"
                 titleStyles={{marginTop:5}}
                       listSize={4}
                       active
                       secondaryColor="rgba(207, 207, 207,1)"
                 />:result.map((x,i)=>  <ResultView rank={i+1} user={x}/>)}
        </View>
      </ScrollView>
    </View>
     
    
    </>
}