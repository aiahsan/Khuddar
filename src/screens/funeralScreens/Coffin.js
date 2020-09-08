import React, { Component, useState } from 'react';
import {
   View,
   Text,
   StyleSheet, ScrollView, TextInput
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DataTable, Button, Provider, Portal, IconButton, Colors,Snackbar } from 'react-native-paper';
import Header from '../authorizationScreens/header'
import { Entypo } from '@expo/vector-icons';
import Grid from './Grid';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal'
import Services from '../../components/funeralComponets/servicesTypes'

export default function () {
   //for selectd services modal
   const [isListVisable, setisListVisable] = useState(false);
   //for services modal
   const [isServicesVisable, setServicesListVisable] = useState(false);


   //available services from database
   const [availableServices, setAvailableServices] = useState([
      {
         id: '1',
         serviceName: 'Ambulance',
         services: [{
            servicesTypeId: '1'
            , 
            serviceTypeName: 'Edhi Foundation',
            servicesCategory: [{
               id: '1',
               type: 'Suzuki Bolan',
               price:1000
            },
            {
               id: '2',
               type: 'Suzki Highest',
               price:1000
            },
               ,
            {
               id: '3',
               type: 'Toyota Highest',
               price:1000
            }]


         },
         {
            servicesTypeId: '2'
            , serviceTypeName: 'Chhipa Welfare Association',
            servicesCategory: [{
               id: '4',
               type: 'Suzuki Bolan'
            },
            {
               id: '5',
               type: 'Suzki Highest'
            },
               ,
            {
               id: '6',
               type: 'Toyota Highest'
            }]
         },
         {
            servicesTypeId: '3'
            , serviceTypeName: 'Aman Foundation',
            servicesCategory: [{
               id: '7',
               type: 'Suzuki Bolan'
            },
            {
               id: '8',
               type: 'Suzki Highest'
            },
               ,
            {
               id: '9',
               type: 'Toyota Highest'
            }]
         },
         {
            servicesTypeId: '4'
            , serviceTypeName: 'Pakistan Red Crescent Society',
            servicesCategory: [{
               id: '10',
               type: 'Suzuki Bolan'
            },
            {
               id: '11',
               type: 'Suzki Highest'
            },
               ,
            {
               id: '12',
               type: 'Toyota Highest'
            }]
         },
         {
            servicesTypeId: '5'
            , serviceTypeName: 'Al Khidmat Foundation',
            servicesCategory: [{
               id: '13',
               type: 'Suzuki Bolan',
               price: 1000
            },
            {
               id: '14',
               type: 'Suzki Highest',
               price: 1000
            },
               ,
            {
               id: '15',
               type: 'Toyota Highest',
               price: 1000
            }]
         },
         {
            servicesTypeId: '6'
            , serviceTypeName: 'Rescue 1122',
            servicesCategory: [{
               id: '16',
               type: 'Suzuki Bolan',
               price: 1000
            },
            {
               id: '17',
               type: 'Suzki Highest',
               price: 1000
            },
               ,
            {
               id: '18',
               type: 'Toyota Highest',
               price: 1000
            }]
         },
         {
            servicesTypeId: '7'
            , serviceTypeName: 'JDC Welfare Foundation',
            servicesCategory: [{
               id: '19',
               type: 'Suzuki Bolan',
               price: 1000
            },
            {
               id: '20',
               type: 'Suzki Highest',
               price: 1000
            },
               ,
            {
               id: '21',
               type: 'Toyota Highest',
               price: 1000
            }]
         },]

      },
      {
         id: '2',
         serviceName: 'Bitter Food',
         services: [{
            servicesTypeId: '1'
            , serviceTypeName: 'Biryani',
            servicesCategory: [{
               id: '21',
               type: 'Daig',
               price: 1000
            },
            {
               id: '22',
               type: 'Boxes',
               price: 1000
            },]
         },
         {
            servicesTypeId: '2'
            , serviceTypeName: 'Chawal',
            servicesCategory: [{
               id: '23',
               type: 'Daig',
               price: 1000
            },
            {
               id: '24',
               type: 'Boxes',
               price: 1000
            },]
         },
         {
            servicesTypeId: '3'
            , serviceTypeName: 'Rotti',
            servicesCategory: [{
               id: '25',
               type: 'Naan',
               price: 30
            },
            {
               id: '26',
               type: 'Chapati',
               price: 10
            },]
         },
         {
            servicesTypeId: '4'
            , serviceTypeName: 'Daal',
            servicesCategory: [{
               id: '27',
               type: 'Daig',
               price: 1000
            },
            {
               id: '28',
               type: 'Packets',
               price: 100
            },]
         },
         ]

      }

   ]);

   //all selected servies
   const [selectedServices,setSelectedServices]=useState([]);


   //items will be displayed in services modal
   const [modalServicesItems,setServicesModal]=useState([]);



   const handleChangeGender = (item) => {
   }
   const handleServices = (item) => {
      const data=availableServices.filter(x=>x.id==item);
      //console.log("sssdscsdsd",data[0].serviceName)
      setServicesModal(data.length>0?data[0].services:[]);
      setServicesListVisable(true);
   }

   const handleItemsInList=(item)=>
   {
      console.log(item)
    const checkExsist=  selectedServices.find(x=>x.id==item.id)
      console.log(checkExsist)
      if(checkExsist)
      {
         setSnackText("Item "+item.name+" updated");
         setVisible(true);
         //alert("added already")
      }
      else
      {    setSnackText("Item "+item.name+" added to list");
      setVisible(true);
         selectedServices.push(item);
      }
     // console.log("check",item)
   }

   //snack bar code
const [snackVisible, setVisible] =useState(false);

const onToggleSnackBar = () => setVisible(!snackVisible);

const onDismissSnackBar = () => setVisible(false);

const [snackText, setSnackText] =useState("");
   return (
      <>
        
        <Header/>
         <Modal hideModalContentWhileAnimating	={true}  onBackdropPress={() => setisListVisable(false)} animationIn="fadeInLeft" animationInTiming={400} animationOut="fadeOutRight" onBackButtonPress={() => {
            setisListVisable(false);
         }} isVisible={isListVisable}>
            <View style={{ flex: 1, backgroundColor: 'white', }}>
               <Grid></Grid>

            </View>
         </Modal>
         <Modal onBackdropPress={() => setServicesListVisable(false)} animationIn="fadeInLeft" animationInTiming={400} animationOut="fadeOutRight" onBackButtonPress={() => {
            setServicesListVisable(false);
         }} isVisible={isServicesVisable}>
            <View style={{ flex: .7, backgroundColor: 'white',paddingTop:10,borderRadius: 10}}>
<Services addItems={handleItemsInList} selectedServices={selectedServices} availableServices={modalServicesItems}   />

            </View>
       
      <View style={{ flex: 0.15}}>
      <Snackbar
        visible={snackVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Cancel',
          onPress: () => {
            // Do something
          },
        }}>
{
snackText
}      </Snackbar>
      </View>
         </Modal>

         <View style={styles.Container} >
            <View style={styles.TopView}>
               <ScrollView>
                  <Text style={styles.heading}>Gender</Text>
                  <DropDownPicker
                     items={[
                        { label: 'Male', value: 'fr' },
                        { label: 'Female', value: 'es' },
                        { label: 'Transgender', value: 'tr' }
                     ]}
                     defaultNull
                     placeholder="Gender"
                     containerStyle={{ height: 40 }}
                     onChangeItem={item => handleChangeGender(item.value)}

                  />
                  <Text style={styles.heading}>Services</Text>

                  <DropDownPicker
                     items={
                 availableServices.map(x => ({ label: x.serviceName, value: x.id }))
                     }
                     defaultNull
                     placeholder="Services"
                     containerStyle={{ height: 40 }}
                     onChangeItem={item => handleServices(item.value)}
                  />
                  <Text style={styles.heading}>Location</Text>

                  <View style={styles.textbody} >
                     <View style={styles.textbodyChild1}>
                        <TextInput placeholder="Location"
                           style={{ width: '100%', height: 45, backgroundColor: 'white' }} />
                     </View>
                     <View style={{ flex: 0.3, borderLeftWidth: 1, borderColor: '#ebebeb' }}>
                        <IconButton
                           style={{}}
                           icon={() =>
                              <Entypo name="location" size={24} color="black" />
                           }
                           color={Colors.red500}
                           size={20}
                           onPress={() => alert('Pressed')}
                        />
                     </View>
                  </View>
                  <MapView region={{
                     latitude: 24.860735,
                     longitude: 67.001137,
                     latitudeDelta: 0.050,
                     longitudeDelta: 0.050,
                  }} style={styles.mapView} />


               </ScrollView>

            </View>

            <View style={styles.bottomView}>
               <Text style={{ marginLeft: '5%', marginTop: '2%' }}>
                  Total Services Charges:
         <Text>RS-5000</Text>
               </Text>
               <Button labelStyle={{ textAlign: 'center' }} onPress={() => setisListVisable(true)}>
                  View my servies list
      </Button>
               <Button style={{ margin: '2%' }} icon={() => <Entypo name="check" size={24} color="white" />} mode="contained" onPress={() => alert()}>
                  Submit Request
      </Button>
            </View>
         </View>
      </>
   )
}
/*
function Modal(){
const [visible, setVisible] = React.useState(false);
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
return
<Provider>
   <Portal>
      <Modal visible={visible} onDismiss={hideModal}>
         <Text>Example Modal</Text>
      </Modal>
   </Portal>
</Provider>
}
*/
const styles = StyleSheet.create({
   Container: {
      flex: 1,
      backgroundColor: '#ffff',
      justifyContent: 'center',
      marginLeft: 5
   },
   Header: {
      flex: 0.2,
      backgroundColor: '#ffff',
   },
   work: {
      flex: 1,
      backgroundColor: '#fffe'
   },
   GridView: {
      flex: .7,
   }
   ,
   TopView: {
      flex: 1,
   },
   bottomView: {
      flex: .3
   },
   textbody: { alignContent: 'center', height: 50, justifyContent: 'center', backgroundColor: 'white', flexDirection: 'row', marginTop: 10, position: 'relative', top: '15%', zIndex: 1, marginLeft: '5%', marginRight: '5%', borderRadius: 5, paddingTop: 2, paddingLeft: '5%' },
   textbodyChild1: { flex: 1.7 },
   mapView: {
      flex: 1,
      height: 300,
      marginTop: '-15%'
   },
   heading: { marginLeft: 2, fontWeight: '700', paddingBottom: 5, paddingTop: 5 }
})
