import * as React from 'react';
import { ScrollView, View, TouchableOpacity, Text, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import NewsCard from '../../../../componnents/home/News/newsCards';
import TopDrawer from '../../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../../componnents/home/headingComp';
import { styles } from '../../../../styles/authStyles'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { repository } from '../../../../utiles/repository';
import { useSelector } from 'react-redux';
import ContentLoader from "react-native-easy-content-loader";

const MyComponent = () => {
   let [page, setPage] = React.useState({});
   const navigation = useNavigation();
   const [newsList, setnewsList] = React.useState([]);
   let [showAnimation, setshowAnimation] = React.useState(false);
   const userr = useSelector(x => x.userReducer);

   const handleChange = (id) => {
   }


   const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {

      (async function () {
         await fetchFamily();
         setRefreshing(false);

      })();
   }, []);

   const fetchFamily = async function () {
      try {

         const { data, status } = await repository.getpostservices({category:"rent_a_car"}, { headers: { 'secret': userr != null && userr.token && userr.token.token ? userr.token.token : "", 'user_id': userr != null && userr.id ? userr.id : '' } }).then(x => x).then(x => x)
         console.log(data)
         if (status == 200 && data && data.success == true) {


            if (data.response.listings) {


               setnewsList(data.response.listings)
               //  dispatch(get_News(data.response.news))
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

   const handleSelectService = async (id) => {
      
      setshowAnimation(true);  
      try {
          const { data, status } = await repository.postservices({
            category:"rent_a_car",
            listing_id:id
           },{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
          if (data && data.status == 200 && data.success == true) {
              setshowAnimation(false)
              alert(data.message)
             
          }
          else {
              alert(data.message)
              setshowAnimation(false)
          }
      }
      catch (e) {
          setshowAnimation(false)

      }
      
   }
   React.useEffect(() => {
      setshowAnimation(true);

      (async function () {
         await fetchFamily();
      })();
   }, [])
   return (<View style={[{ backgroundColor: 'white', flex: 1 }, styles.ctr]}>
      <TopDrawer />

      <ScrollView refreshControl={
         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
         alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
         <Heading head="Selected Rent A Car" label="My Selected Rent A Car" type={true} />
         {
            showAnimation == true ? <ContentLoader
               pRows={0}
               tHeight={100}
               tWidth="95%"
               titleStyles={{ marginTop: 5 }}
               listSize={4}
               active
               secondaryColor="rgba(207, 207, 207,1)"
            /> : newsList.map(x => <NewsCard  date_created={x.date_created ? x.date_created : ""} short_content={x.description ? x.description : ""} title={x.title ? x.title : ""} hasButton={false} src={x.image ? x.image : ""} />
            )
         }


      </ScrollView>
   </View>);
};

export default MyComponent;