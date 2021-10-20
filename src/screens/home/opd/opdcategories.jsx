import * as React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Text,  RefreshControl,
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
import { Avatar, Searchbar } from 'react-native-paper';
import { repository } from '../../../utiles/repository';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Add_All_OPd_categories} from '../../../redux/actions/familyActionMehodes'
const MyComponent = () => {

    let [page, setPage] = React.useState({});
    let [showAnimation, setshowAnimation] = React.useState(false);
    let [members, setmembers] = React.useState([]);
    let [searchmembers, setsearchmembers] = React.useState([]);

    const dispatch=useDispatch();
    const familyMembers=useSelector(x=>x.opd_categories);
    const navigation = useNavigation();
    let [serachValue, setserachValue] = React.useState("");

  
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
  const userr=useSelector(x=>x.userReducer);

   const fetchFamily= async function () {
        try {

            
            const { data, status } = await repository.opd_categories({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data)
                if (status == 200 && data && data.success == true) {


                if (data.response && data.response.opd_categories)
                    {
                        setmembers(data.response.opd_categories)
                        setsearchmembers(data.response.opd_categories)}
                        dispatch(Add_All_OPd_categories(data.response.opd_categories))
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
            setsearchmembers(familyMembers);
            setshowAnimation(false);

        }
      

    }, [])
    const ResultView = ({ name,id }) => {
        return <TouchableOpacity onPress={()=>navigation.navigate(Nav.OPD,{category_id:id})} style={[styles.felxRow, { justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ededed', padding: 10 }]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Heading head={name} style={{ color: '#717171', fontSize: 14, marginLeft: 12 }} />

            </View>
          
        </TouchableOpacity>
    }
    return (<View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />
        
        <View style={[styles.ctr, styles.mt5]}>
            <ScrollView   refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
       alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
                <Heading head="OPD Specialist" label="Choose best specialist" />

                <View style={[styles.mt5, { padding: 10 }]}>
                    <Searchbar onChangeText={handleSearch}  serachValue={serachValue} hasRight={false} placeholder="Search specialist" inputStyle={{ fontSize: 12 }} />

                </View>
                {
                 showAnimation==true?<ContentLoader
                 pRows={0}
                 tHeight={50}
                 tWidth="95%"
                 titleStyles={{marginTop:5}}
                       listSize={4}
                       active
                       secondaryColor="rgba(207, 207, 207,1)"
                 />:searchmembers.map((x, i) => <ResultView key={i}  name={x.name ? x.name : ""} id={x.id?x.id:0} />)
                }
            </ScrollView>

        </View>

    </View>);
};


export default MyComponent;