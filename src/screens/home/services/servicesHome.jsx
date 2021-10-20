import * as React from 'react';
import { ScrollView, View, TouchableOpacity,StyleSheet,Text,RefreshControl} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { styles } from '../../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../componnents/home/headingComp'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import ServiceCard from '../../../componnents/home/serviceCard';
import {Nav} from '../../../navigation/navigationType';
import {repository} from '../../../utiles/repository';
import {GetAllService} from '../../../redux/actions/familyActionMehodes';
import {useDispatch,useSelector} from 'react-redux';
import _ from 'lodash';
import ContentLoader from "react-native-easy-content-loader";

const MyComponent = () => {

    let [service,setService]=React.useState({});
    let [showAnimation, setshowAnimation] = React.useState(false);
    let [members, setmembers] = React.useState(null);
    const dispatch=useDispatch();
    const navigation = useNavigation();
    const reduxServices=useSelector(x=>x.services)
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
                const { data, status } = await repository.my_services({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
                    
                if (status == 200 && data && data.success == true) {
                    
                    if (data.response)
                        {
                            
    

                            setService(data.response)}
                            dispatch(GetAllService(data.response))
                            setshowAnimation(false);
                }
                else {
                    
                    setshowAnimation(false);
                }
            }
            catch (e) {
                alert(e)
                setshowAnimation(false);
            }
        };
        React.useEffect(() => {
            setshowAnimation(true);
            
            if(_.isEmpty(reduxServices))
            {
                (async function(){
                    await fetchFamily();
                })();
            }
            else
            {
    
                setService(reduxServices);
                
                setshowAnimation(false);
    
            }
          
    
        }, [])
    return (<>
    <View style={[{backgroundColor:'white',flex:1}]}>
         <TopDrawer/>
         <View style={styles.ctr}>
     <ScrollView  refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
        alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
     <View style={{marginTop:RFValue(20)}}>
     <Heading head="Khuddar Services" label="Please choose your service" type={true}  />
         {
               showAnimation==true?<ContentLoader
               pRows={0}
               tHeight={100}
               tWidth="95%"
               titleStyles={{marginTop:5}}
                     listSize={4}
                     active
                     secondaryColor="rgba(207, 207, 207,1)"
               />:<><View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15)}}>
               
               {/* <ServiceCard
               islock={false} 
            //    islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<2 ||service.total_paid>1?true:false} 
                src={require('../../../images/services/f13.png')} onPress={()=>{navigation.navigate(Nav.Alnikkah)}} title="Al Nikkah" />
                */}
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<3 || service.total_paid>2?true:false} src={require('../../../images/services/f14.png')} onPress={()=>{navigation.navigate(Nav.BaratHome)}} title="Barat" />
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<3 || service.total_paid>3?true:false} src={require('../../../images/services/f15.png')} onPress={()=>{navigation.navigate(Nav.FunritureHome)}} title="Funriture" />

               </View>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15)}}>
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<3 || service.total_paid>3?true:false} src={require('../../../images/services/f16.png')} title="Food and Food" onPress={()=>{navigation.navigate(Nav.FoodHome)}} />
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<4 || service.total_paid>4?true:false} src={require('../../../images/services/f17.png')} title="Wedding Dress" onPress={()=>{navigation.navigate(Nav.WeedingHome)}} />

               </View>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15)}}>
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<4 || service.total_paid>4?true:false} src={require('../../../images/services/f19.png')} title="Salon / Parlour" onPress={()=>{navigation.navigate(Nav.SaloonHome)}} />
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<5 || service.total_paid>5?true:false} src={require('../../../images/services/f18.png')} title="Valima" onPress={()=>{navigation.navigate(Nav.ValimaHome)}} />

               </View>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15),marginBottom:RFValue(25)}}>
               <ServiceCard islock={service.is_payment_clear&&service.is_payment_clear==true&&service.total_paid&&service.total_paid<5 || service.total_paid>5?true:false} src={require('../../../images/services/f20.png')} title="Rent A Car" onPress={()=>{navigation.navigate(Nav.RentacarHome)}} />
               </View></>
         }
     
     </View>
     </ScrollView>
   
 </View>
     
     </View>
    </> );
};


export default MyComponent;