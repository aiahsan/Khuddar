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
import {Add_All_members} from '../../../redux/actions/familyActionMehodes'
const MyComponent = () => {

    let [page, setPage] = React.useState({});
    let [showAnimation, setshowAnimation] = React.useState(false);
    let [members, setmembers] = React.useState([]);
    let [searchmembers, setsearchmembers] = React.useState([]);

    const dispatch=useDispatch();
    const familyMembers=useSelector(x=>x.familyMembers);
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

            
            const { data, status } = await repository.list_family_member({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data)
                if (status == 200 && data && data.success == true) {


                if (data.response.user && data.response.user.members)
                    {

                        setmembers(data.response.user.members)
                        setsearchmembers(data.response.user.members)}
                        dispatch(Add_All_members(data.response.user.members))
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
    const ResultView = ({ image, name, type }) => {
        return <View style={[styles.felxRow, { justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ededed', padding: 10 }]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Image source={{ uri: image }} />
                <Heading head={name} style={{ color: '#717171', fontSize: 14, marginLeft: 12 }} />

            </View>
            <View>
                <Heading head="Member Type" style={{ color: '#717171', fontSize: 14 }} type={true} />
                <Heading head={type} style={{ color: '#717171', fontSize: 14, marginTop: RFValue(-20) }} />

            </View>
        </View>
    }
    return (<View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />
        
        <View style={[styles.ctr, styles.mt5]}>
            <ScrollView   refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
       alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
                <Heading head="Family Details" label="Upload Details about your family" />

                <View style={[styles.mt5, { padding: 10 }]}>
                    <Searchbar onChangeText={handleSearch}  serachValue={serachValue} hasRight={false} placeholder="Search Member" inputStyle={{ fontSize: 12 }} />

                </View>
                {
                 showAnimation==true?<ContentLoader
                 avatar
                 pRows={0}
                 tHeight={50}
                 
                 tWidth="95%"
                 titleStyles={{marginTop:5}}
                       listSize={4}
                       active
                       secondaryColor="rgba(207, 207, 207,1)"
                 />:searchmembers.map((x, i) => <ResultView key={i} image={x.image ? x.image : ""} name={x.name ? x.name : ""} type={x.type ? x.type : ""} />)
                }
            </ScrollView>

        </View>

    </View>);
};


export default MyComponent;