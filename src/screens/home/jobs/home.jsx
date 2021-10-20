import * as React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Text,  RefreshControl,Dimensions
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import ContentLoader from "react-native-easy-content-loader";
import { styles } from '../../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../componnents/home/headingComp'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ServiceCard from '../../../componnents/home/serviceCard';
import { Nav } from '../../../navigation/navigationType'
import {  Searchbar } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { repository } from '../../../utiles/repository';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {All_Jobs_Items} from '../../../redux/actions/jobsActionMethodes';
const width=Dimensions.get('window').width;
const MyComponent = () => {

    let [page, setPage] = React.useState({});
    let [showAnimation, setshowAnimation] = React.useState(false);
    let [members, setmembers] = React.useState([]);

    const dispatch=useDispatch();
    const familyMembers=useSelector(x=>x.jobsItems);
    const navigation = useNavigation();
    const handleChange = (id) => {
    }
    const userr=useSelector(x=>x.userReducer);

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {

    (async function(){
        await fetchFamily();
        setRefreshing(false);

    })();
  }, []);

   const fetchFamily= async function () {
        try {

            const { data, status } = await repository.jobs({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data)
                if (status == 200 && data && data.success == true) {


                if (data.response.jobs)
                    {

                       
                        setmembers(data.response.jobs)
                        dispatch(All_Jobs_Items(data.response.jobs))
                    }
                    
                setshowAnimation(false);
            }
            else {
                setshowAnimation(false);
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
            setmembers(familyMembers);
            setshowAnimation(false);

        }
      

    }, [])
    const ResultView = ({ image, name, type,x }) => {
        return <View >
            <Card>
        <Card.Cover style={{height:'65%'}} source={{ uri: image.length>0?image[0].image:"https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />
        <Card.Content>
      <Title numberOfLines={1} style={styles.mainTitleHead1}>{name}</Title>
      <Paragraph numberOfLines={1} style={[styles.mainTitleHead1,{fontSize:12,marginTop:RFValue(-6)}]}>{x.desciption?x.desciption:""}</Paragraph>
    </Card.Content>
      </Card>
        </View>
    }
    return (<View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />
        
        <View style={[styles.ctr, styles.mt5]}>
            <ScrollView   refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
       alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
                <Heading head="Jobs" label="Search nearest jobs" />

                <View style={[styles.mt5, { padding: 10 }]}>
                    <Searchbar hasRight={false} placeholder="Search jobs" inputStyle={{ fontSize: 12 }} />

                </View>
                {
                 showAnimation==true?<View style={Cardstyles.container}>
                     {
                         Array.from([1, 2, 3,4,5], x =><View style={[Cardstyles.box]}><ContentLoader  
                            pRows={2}
                            tHeight={width/3}
                            pHeight={width/15}
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
                         members.map((x, i) => <TouchableOpacity onPress={()=>navigation.navigate(Nav.Apply,{x:x})} style={[Cardstyles.box]} key={i}><ResultView i={i}  x={x} image={x.images ? x.images : []} name={x.title ? x.title : ""} type={x.type ? x.type : ""} /></TouchableOpacity>)
}
                 </View>
                }
            </ScrollView>

        </View>

    </View>);
};


export default MyComponent;

const Cardstyles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    box: {
      flexBasis:width/2.55,
      height: width/2,
      margin: 10,
      marginBottom:50
    }

  });