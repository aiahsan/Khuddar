import * as React from 'react';
import { ScrollView, View, TouchableOpacity,StyleSheet,Text,Dimensions,RefreshControl } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import ServiceCard from '../../componnents/home/serviceCard';
import {Nav} from '../../navigation/navigationType';
import { repository } from '../../utiles/repository';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {All_Blog_Items} from '../../redux/actions/blogActionMethodes'
import ContentLoader from "react-native-easy-content-loader";

const width=Dimensions.get('screen').width;
const MyComponent = () => {
    const dispatch=useDispatch();

    let [members, setmembers] = React.useState([]);
    const navigation = useNavigation();
    const handleChange = (id) => {      
    }
    const userr=useSelector(x=>x.userReducer);
    const familyMembers=useSelector(x=>x.blogs);

    let [showAnimation, setshowAnimation] = React.useState(false);

  
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {

    (async function(){
        await fetchFamily();
        setRefreshing(false);

    })();
  }, []);
  const handleSearch=(value)=>{

    if(value!="")
    {
        setserachValue(value);
        const output = members.filter(x => x.name.toLowerCase().startsWith(value.toLowerCase()))
        setsearchmembers(output);

    }
    else
    {
        setserachValue("");
        
        setsearchmembers(members);
    }
  }

   const fetchFamily= async function () {
    try {

            
            const { data, status } = await repository.blogs({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data)
                if (status == 200 && data && data.success == true) {


                if (data.response.categories)
                    {
                        console.log(data.response.categories,"fsd")

                        setmembers(data.response.categories)
                        dispatch(All_Blog_Items(data.response.categories))
                setshowAnimation(false);
            }
            else {
                setshowAnimation(false);
            }
        }
    }
        catch (e) {
            setshowAnimation(false);
        }
    };
    React.useEffect(() => {
        setshowAnimation(true);

        if(familyMembers.length<=0)
        {
            (async function(){
                await fetchFamily();
            })();
        }
        else
        {   
            console.log(familyMembers,"fsd")
            setmembers(familyMembers);
            setshowAnimation(false);

        }
      

    }, [])
    return ( <View style={[{backgroundColor:'white',flex:1}]}>
        <TopDrawer/>
<View style={styles.ctr}>
<ScrollView 
 refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
 alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
        
{
               showAnimation==true?<ContentLoader
               pRows={0}
               tHeight={100}
               tWidth="95%"
               titleStyles={{marginTop:5}}
                     listSize={4}
                     active
                     secondaryColor="rgba(207, 207, 207,1)"
               />:
    <View style={{marginTop:RFValue(20)}}>
    <Heading head="Affiliate marketing" label="Description..." type={true}  />
    <View style={[Cardstyles.container,{marginBottom:20}]}>
    {members.map((x,i)=>  <View style={[Cardstyles.box]}>
        <ServiceCard islock={true} imageStyle={{width:width/3,height:width/4.5}} src={{uri:x.image}} onPress={()=>{navigation.navigate(Nav.Articles,{blogs:x})}} title={x.name} />
        </View>
       
   )}
    </View>
     </View>
    }
    </ScrollView>
  
</View>
    
    </View>);
};

const Cardstyles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    box: {
      flexBasis:width/2.55,
      height: width/4,
      margin: 10,
      marginBottom:50
    }

  });
export default MyComponent;