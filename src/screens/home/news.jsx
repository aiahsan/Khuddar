import * as React from 'react';
import { ScrollView, View, TouchableOpacity,Text,RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import NewsCard from '../../componnents/home/News/newsCards';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp';
import {styles} from '../../styles/authStyles';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {get_News} from '../../redux/actions/newsActionMethodes'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { repository } from '../../utiles/repository';
import ContentLoader from "react-native-easy-content-loader";

const MyComponent = () => {
    let [page, setPage] = React.useState({});
    const navigation = useNavigation();
    const [newsList,setnewsList]=React.useState([]);
    const dispatch=useDispatch();
    const news=useSelector(x=>x.news);
    let [showAnimation, setshowAnimation] = React.useState(false);
    const userr=useSelector(x=>x.userReducer);

    const handleChange = (id) => {
    }

    
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {

    (async function(){
        await fetchFamily();
        setRefreshing(false);

    })();
  }, []);

  const fetchFamily= async function () {
   try {

       const { data, status } = await repository.news_list({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
       console.log(data)
           if (status == 200 && data && data.success == true) {


           if (data.response.news)
               {

                  
                   setnewsList(data.response.news)
                   dispatch(get_News(data.response.news))
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

        if(news.length<=0)
        {
            (async function(){
                await fetchFamily();
            })();
        }
        else
        {   
            setnewsList(news);
            setshowAnimation(false);

        }
    }, [])
    return (<View style={[{backgroundColor:'white',flex:1},styles.ctr]}>
 <TopDrawer/>
 {
     
 }
 <ScrollView  refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
       alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
 
 <Heading head="News" label="Lorem Ipsum is simply" type={true} />
 {
               showAnimation==true?<ContentLoader
               pRows={0}
               tHeight={100}
               tWidth="95%"
               titleStyles={{marginTop:5}}
                     listSize={4}
                     active
                     secondaryColor="rgba(207, 207, 207,1)"
               />:newsList.map(x=> <NewsCard date_created={x.date_created?x.date_created:""} short_content={x.short_content?x.short_content:""} title={x.title?x.title:""} hasButton={false} src={x.image?x.image:""}/>
               )
 }
 </ScrollView>
    </View>);
};

export default MyComponent;