import React,{Component,useState,useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from '../authorizationScreens/header'
import Modal from 'react-native-modal'
import { Appbar, Avatar, Menu, Provider , Text } from 'react-native-paper';
import AlNikha from '../../components/shadiComponets/alNikhan';
import Baraat from '../../components/shadiComponets/Baraat';
import Valima from '../../components/shadiComponets/valima';
import Saloon from '../../components/shadiComponets/saloon';
import FoodandFood from '../../components/shadiComponets/foodAndFood';
import Banquet from '../../components/shadiComponets/banquet ';
import WeedingDress from '../../components/shadiComponets/weedingDress';
import RentaHappyCar  from '../../components/shadiComponets/RentaHappyCar';


export default affilation= ({imgUri,title,navigation},props) => {
  
    const [ActiveComponent,SetActiveComponent]=useState(0);
    const [ActiveFlex,SetActiveFlex]=useState(1);
    const [showModal,setShowModal]=useState(false);

    const ModalComponent=(type)=>{

        switch(type)
        {
            case 0:{
                
                return <AlNikha/>
            }
            
            case 1:{

                return <Baraat/>
            }
            
            case 2:{

                return <Valima/>
            }
            
            case 3:{

                return <Saloon/>
            }
            
            case 4:{

                return <FoodandFood/>
            }
            
            case 5:{

                return <Banquet/>
            }
            
            case 6:{

                return <WeedingDress/>
            }
            
            
            case 7:{

                return <RentaHappyCar/>
            }
            
             default:{
                return <AlNikha/>
            }
        }
        
    }
    return (<>
    <Header/>
     <Modal onBackButtonPress={()=>setShowModal(false)} onBackdropPress={()=>setShowModal(false)} isVisible={showModal} >
     <View style={{flex:ActiveFlex,backgroundColor:'white',borderRadius:20}}>
       {ModalComponent(ActiveComponent)}
       </View>
     </Modal>
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>{

SetActiveComponent(0);
SetActiveFlex(.6)
setShowModal(true);
            }} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'60%',height:'100%'}} source={require('../../icons/affilation/amazon.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Al-Nikkah</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} onPress={()=>{

SetActiveComponent(1);
SetActiveFlex(.6);
setShowModal(true);
            }} >
               
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'80%',height:'100%'}} source={require('../../icons/affilation/daraz.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Baraat</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>{

SetActiveComponent(2);
SetActiveFlex(.6);
setShowModal(true);
            }} >
                  <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'70%',height:'100%'}} source={require('../../icons/affilation/goto.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Valima</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  onPress={()=>{

SetActiveComponent(3);
SetActiveFlex(1);
setShowModal(true);
            }} >
                  <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'70%',height:'100%'}} source={require('../../icons/affilation/shopify.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <>
                            <Text style={styles.titleContent}>Groom Salon</Text>
                            
                            </>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} style={styles.obj} onPress={()=>{

                
SetActiveComponent(4);
SetActiveFlex(1);
setShowModal(true);
            }} >
               <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'80%',height:'100%'}} source={require('../../icons/affilation/shareAsale.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Food and Food</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  style={styles.obj} onPress={()=>{
                           
SetActiveComponent(5);
SetActiveFlex(1);
setShowModal(true);
            }} >
            <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'50%',height:'100%'}} source={require('../../icons/affilation/inspedum.jpg')} ></Image>
                    </View>
                    <View style={styles.titlContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Marriage Banquet</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj}  style={styles.obj} style={styles.obj} onPress={()=>{

                
SetActiveComponent(6);
SetActiveFlex(1);
setShowModal(true);
            }} >
               <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'75%',height:'100%'}} source={require('../../icons/affilation/walee.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Furniture</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  style={styles.obj} style={styles.obj} onPress={()=>{

                                
SetActiveComponent(7);
SetActiveFlex(1);
setShowModal(true);
            }} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'65%',height:'100%'}} source={require('../../icons/affilation/homeshopping.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Rent a Happy Car</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
    </>)
}

    
const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f6f8", width: '100%', height: '100%', maxHeight: 170, 
        marginBottom:0,
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft:'2%',
        paddingRight:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        
        
    },
    titleContianer: { backgroundColor: '#f5f6fb',flex:1,justifyContent:'center',alignItems:'flex-end',height: 45,paddingTop:'5%',paddingBottom:'5%', borderRadius: 10 },
    titleContent: {
        fontWeight: 'bold', alignSelf: 'stretch',
        textAlign: 'center',  marginTop: -10
    },
  obj:{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff", width: '100%', height: '100%', maxHeight: 170, borderRadius:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft:'2%',
        marginRight:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    
  

});