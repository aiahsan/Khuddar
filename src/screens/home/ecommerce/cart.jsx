import * as React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../../../styles/authStyles';
import Header from '../../../componnents/auth/header';
import Heading from '../../../componnents/home/headingComp';
import ProductCard from '../../../componnents/products/orderCard'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../../navigation/navigationType';
import { useSelector ,useDispatch} from 'react-redux';
import { eaddItemToCart, eremoveItemFromCart,eremoveSingleCartItem } from '../../../redux/actions/ecartActionMethodes';
// import Language from '../../../Localization/Language'
import { repository } from '../../../utiles/repository';
import LottieView from 'lottie-react-native';
import {eemptyCart} from '../../../redux/actions/ecartActionMethodes'
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';

import _ from 'lodash'
const MyComponent = () => {
    let [page, setPage] = React.useState({});
    const cartMain=useSelector(x=>x.ecart);
    const products=useSelector(x=>x.emartItems);
    const navigation = useNavigation();
    const dispatch=useDispatch();
    const [showAnimation, setshowAnimation] = React.useState(false);
    const userr=useSelector(x=>x.userReducer);

    const removeItem = (id) => {
        
        let item = _.find(products, (x) => x.id == id);
        dispatch(removeItemFromCart(item));
    }
    const removeCartItem = (id) => {
        let item = _.find(products, (x) => x.id == id);
        console.log(item,'ssssssssssssssssssssssssssssss')
        dispatch(removeSingleCartItem(item));
    }
    const addItem=(id)=>{
            let item=_.find(products,(x)=>x.id==id);
            dispatch(addItemToCart(item));
    }
    const postData = async () => {

        try
        {
            let productsFina=[];
            if(cartMain && cartMain.items && cartMain.items.length>0)
            {
                productsFina= cartMain.items.map(x=>{
                    return {
                        product_id:x.id,
                        at_price:x.price,
                        at_discounted_price:x.discounted_price,
                        quantity:x.quantity,
                        }
                })
                console.log(productsFina,"sds")
            }
            setshowAnimation(true)
            const { data, status } = await repository.emart_order({
                amount:cartMain && cartMain.totalPrice?cartMain.totalPrice:0,
                products:productsFina,
            },{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }
            ).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                dispatch(eemptyCart())
                alert(data.message);

                setshowAnimation(false)
               }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch(e)
        {
            setshowAnimation(false)

        }     
        
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
        return <>
        <ProductCard handlefav={()=>handlefav(x.id)} fav={fav} removeCartItem={()=>removeCartItem(x.id)}  quantity={foundProduct?foundProduct.quantity:1} flag={flag} title={x.title ? x.title: ""} onIncrease={() => { addItem(x.id) }} onDecrease={() => {removeItem(x.id) }} desc="Description" unit="2 Kg" discounted_price={x.discounted_price ? x.discounted_price : "0"} price={x.price ? x.price : "0"} img={x.images && x.images.length > 0 ? x.images[0].image : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"} />
       
        </>
    

       }
    return (
        <>
            <View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />
                <ScrollView>


                    <View style={[styles.ctr, styles.mt5]}>
                        <Heading head="Cart" label="Your Cart" />


                        {

                            cartMain && cartMain.items ? cartMain.items.map((x, i) => <RenderCard key={i} x={x} />) : <></>}
                    </View>

                </ScrollView>

            </View>
            <View style={[{ position: 'absolute', bottom: 0, justifyContent: 'space-between', width: '100%', paddingTop: 20, paddingBottom: RFValue(25), paddingLeft: 10, paddingRight: 10 }, styles.themeBackColor, styles.felxRow]}>
                <Text style={[styles.mainpara, styles.themeColorwhite, { fontSize: 18 }]}>{cartMain && cartMain.totalItems ? cartMain.totalItems + ` Total Items:$${cartMain.totalPrice}` : "No Items"}</Text>
                            {
                                showAnimation==true? <LottieView

                                style={[{
                                    width: 100,
                                    height: 40,
                                    alignSelf: 'center'
                                }]}
                                autoPlay={true}
                                loop={true}
                                source={require('../../../animations/New/2.json')}
                                // OR find more Lottie files @ https://lottiefiles.com/featured
                                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                                />: <TouchableOpacity onPress={() => {
                  if(cartMain.items.length>0)
                  postData()
                  else
                  alert("Cart is empty")  
                }}>
                    <Text style={[styles.mainpara, styles.themeColorwhite, { fontSize: 18 }]}>Continue <Text>
                        <MaterialCommunityIcons name="chevron-right" size={RFValue(20)} color="white" /></Text></Text>

                </TouchableOpacity>
                            }
                
                             

               
            </View>
        </>);
};

export default MyComponent;