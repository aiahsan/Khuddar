import React, { useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../carsoul/styles/SliderEntry';
import SliderEntry from '../../carsoul/components/SliderEntry';
import { styles } from '../../styles/authStyles';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Avatar, Button, Card, Title, Paragraph, TextInput, Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import {repository} from '../../utiles/repository';
import ContentLoader from "react-native-easy-content-loader";
import {Nav} from '../../navigation/navigationType'
const width = Dimensions.get('window').width;

export default ({navigation,route}) => {
    const [featured, setfeatured] = React.useState([]);
    const [articles, setarticles] = React.useState([]);
    let [showAnimation, setshowAnimation] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch();
  

        React.useEffect(() => {
                if(route&&route.params&&route.params.blogs&&route.params.blogs&&route.params.blogs.blogs)
                {
                   let featured=route.params.blogs.blogs.filter(x=>x.is_featured=="1")
                   let unFeatured=route.params.blogs.blogs.filter(x=>x.is_featured!="1");
                   setfeatured(featured.map(x=>{
                       return{
                        title: x.title?x.title:"",
                        subtitle: x.short_content?x.short_content:"",
                        illustration: x.image?x.image:'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png',
                        ...x
                    }
                   }));
                   setarticles(unFeatured);
                }
                else
                {
                    navigation.goBack();
                }
        }, []);
        const ResultView = ({ image, name, type,x }) => {
            return <View >
                <Card style={{borderRadius:10}}>
            <Card.Cover style={{height:'75%'}} resizeMode="cover" source={{ uri: image?image:"https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />
            <Card.Content>
          <Title ellipsizeMode="tail" numberOfLines={1} style={styles.mainTitleHead1}>{name}</Title>
          <Paragraph ellipsizeMode="tail" numberOfLines={1} style={[styles.mainTitleHead1,{fontSize:12,marginTop:RFValue(-6)}]}><Text>{x.short_content?x.short_content:""}</Text></Paragraph>
        </Card.Content>
          </Card>
            </View>
        }
    const _renderItem = ({ item, index }) => {
        return <TouchableOpacity onPress={()=>{
            navigation.navigate(Nav.ArticlesPage,{blog:item})}} >
            <SliderEntry data={item} even={(index + 1) % 2 === 0} />
        </TouchableOpacity>;
    }
    return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />

        <View style={[styles.ctr, styles.mt5]}>
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
                <Heading head={route&&route.params&&route.params.blogs&&route.params.blogs.name?route.params.blogs.name:""} label=" Buy best products" />

                <Carousel
                    data={featured}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    removeClippedSubviews={false}
                />
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
                         articles.map((x, i) => <TouchableOpacity onPress={()=>navigation.navigate(Nav.ArticlesPage,{blog:x})} style={[Cardstyles.box]} key={i}><ResultView i={i}  x={x} image={x.image?x.image:""} name={x.title ? x.title : ""} type={x.type ? x.type : ""} /></TouchableOpacity>)
}
                 </View>
                }

            </ScrollView>
        </View>

    </View>
}
const Cardstyles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    box: {
        flexBasis: width /.2,
        height: width / 2,
        margin: 10,
        marginBottom: 50,

    }

});