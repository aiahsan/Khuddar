import React,{useEffect,useState} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import NikkaFiled from './textFiled';
import DateField from './dateField';
import TextArea from './textAreaField'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function(){
  const [GroomName,setGroomName]=useState('');
  const [KitchenName,setKitchenName]=useState('');
  const [Services,setServices]=useState('');
  const [Amount,setAmount]=useState('');
  const [KitchenLocation,setKitchenLocation]=useState('');
  const [displayDate,setdisplayDate]=useState('');
  const [displayTime,setdisplayTime]=useState('');
  
  
  
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
    const [clockDisplayType,setclockDisplayType]=useState('date')
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    setdisplayDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
  };
  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    setdisplayTime(date.getHours() + "-" + (date.getMinutes() + 1))
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setclockDisplayType('date');
    showMode('date');
  };

  const showTimepicker = () => {
    setclockDisplayType('time');
    showMode('time');
  };
 

      return<>
      <View style={{marginLeft:'5%',marginRight:'5%',flex:.2}}>
                  <Text style={{ fontFamily: 'Inter-Black',fontSize:30,color:'#0289a9' ,textAlign:'center'}}>Food And Food</Text>
</View>
      <View style={{flex:1.5}}>
        <ScrollView>

<NikkaFiled placeholder="Input Groom Name" label="Groom Name" value={GroomName} setText={setGroomName} />
<NikkaFiled placeholder="Input Kitchen Name" label="Kitchen Name" value={KitchenName} setText={setKitchenName} />
<NikkaFiled placeholder="Input Kitchen Location" label="Kitchen Location" value={KitchenLocation} setText={setKitchenLocation} />
<DateField placeholder="Input Confirmation Date" label="Date" onPress={showDatepicker} value={displayDate} hasButtonHandler={true} />
<DateField placeholder="Input Confirmation Time" label="Time" onPress={showTimepicker} value={displayTime} hasButtonHandler={true} />
<TextArea placeholder="Input Services Details" label="Services Details" value={Services} setText={setServices} />
<NikkaFiled placeholder="Mention amount for services" label="Amount" value={Amount} setText={setAmount} keyboardType={'numeric'} />

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={(clockDisplayType=='date'?onChange:onChangeTime)}
        />
      )}
        </ScrollView>
  </View>
  <View style={{flex:.4}}>
  <Button style={{marginTop:'10%',marginBottom:'5%',backgroundColor:'#0289a9'}} mode="contained">Submit</Button>

  </View>
  </>

    }