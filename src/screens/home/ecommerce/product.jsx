import React, { useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../carsoul/styles/SliderEntry';
import SliderEntry from '../../../carsoul/components/SliderEntry';
import { styles } from '../../../styles/authStyles';
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../componnents/home/headingComp'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Avatar, Button, Card, Title, Paragraph, TextInput, Snackbar } from 'react-native-paper';
import { eaddItemToCart, eremoveItemFromCart, eremoveSingleCartItem } from '../../../redux/actions/ecartActionMethodes'
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash'
import {FontAwesome,Entypo} from '@expo/vector-icons';
import ProductCard from '../../../componnents/mart/productCartItem';
import {Nav} from '../../../navigation/navigationType';
import {useNavigation} from '@react-navigation/native'
export default (props) => {
    const [services, setServices] = React.useState([]);
    const [product, setProduct] = React.useState([]);
    const [carfoundproduct, setcarfoundProduct] = React.useState(undefined);
    const [flag,setFlag]=React.useState(false);
    const dispatch = useDispatch();
    const cartMain=useSelector(x=>x.ecart);
    const products=useSelector(x=>x.emartItems);
    console.log(cartMain, "cartMain");
    const navigation=useNavigation();
    useEffect(() => {
        if(props.route && props.route.params && props.route.params.x)
        {
            
    
            if (props.route.params.x.images) {
    
                if (props.route.params.x) {
                    setProduct(props.route.params.x);
                }
                if (props.route.params.x.images) {
    
                    const mapData = props.route.params.x.images.map(x => {
                        return {
                            title: "",
                            subtitle: "",
                            illustration: x.image,
                            data: ""
                        }
                    })
    
                    setServices(mapData);
                }
            }
        }
     
    }, []);
    const removeItem = (id) => {
        
        let item = _.find(products, (x) => x.id == id);
        dispatch(eremoveItemFromCart(item));
    }
    const removeCartItem = (id) => {
        let item = _.find(products, (x) => x.id == id);
        console.log(item,'ssssssssssssssssssssssssssssss')
        dispatch(eremoveSingleCartItem(item));
    }
    const addItem=(id)=>{
            let item=_.find(products,(x)=>x.id==id);
            dispatch(eaddItemToCart(item));
    }

    const RenderCard = ({ x,mainProps }) => {
        
        let flag = false;
        let fav=false;
        const foundProduct=cartMain.items?cartMain.items.find(y => y.id == x.id):undefined;
        if (foundProduct)
            flag = true;
        else
            flag = false;
        console.log(mainProps,"main")
      if(mainProps&&mainProps.route&&mainProps.route.params&&mainProps.route.params.x&&mainProps.route.params.x.id==x.id)
      {
        return <>
        <ProductCard handlefav={()=>handlefav(x.id)} fav={fav} removeCartItem={()=>removeCartItem(x.id)}  quantity={foundProduct?foundProduct.quantity:1} flag={flag} title={x.title ? x.title: ""} onIncrease={() => { addItem(x.id) }} onDecrease={() => {removeItem(x.id) }} desc="Description" unit="2 Kg" discounted_price={x.discounted_price ? x.discounted_price : "0"} price={x.price ? x.price : "0"} img={x.images && x.images.length > 0 ? x.images[0].image : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"} />
        {
        flag==true?<TouchableOpacity onPress={() => navigation.navigate(Nav.ECartSummry)}>
        <Text style={[styles.themeBackColor, { color: 'white', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5,marginTop:10,maxWidth:120,alignSelf:'flex-end' }, styles.PoppinsMedium]}>Check out</Text>
      </TouchableOpacity>:<></>
        }
        </>
    
      }
      else
      return null;

       }
    const _renderItem = ({ item, index }) => {
        return <TouchableOpacity >
            <SliderEntry data={item} even={(index + 1) % 2 === 0} />
        </TouchableOpacity>;
    }
    return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />

        <View style={[styles.ctr, styles.mt5]}>
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
                <Heading head={product && product.title ? product.title : ""} label=" Buy best products" />

                <Carousel
                    data={services}
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
                <Paragraph numberOfLines={1} style={[styles.mainTitleHead1, { fontSize: 12, marginTop: RFValue(-6) }]}>Price: RS-<Text style={product && product.discounted_price ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {}}>{product && product.price ? product && product.price : ""}</Text></Paragraph>
                <Paragraph numberOfLines={1} style={[styles.mainTitleHead1, { fontSize: 12, marginTop: RFValue(-6) }]}>RS-{product && product.discounted_price ? product && product.discounted_price : ""}</Paragraph>
                    {console.log(products,"sadasi")}
                {products.map((x, i) => <RenderCard mainProps={props} key={i} x={x} />)}

                <Paragraph style={[styles.mt5, styles.mainpara]}>Description</Paragraph>
                <Paragraph style={[styles.mainpara, { fontSize: 14 }]}>{product && product.description ? product.description : ""}</Paragraph>


            </ScrollView>
        </View>

    </View>
}