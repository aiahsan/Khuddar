import React,{useEffect,useState} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import NikkaFiled from './textFiled';
import DateField from './dateField';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function(){
  const [GroomName,setGroomName]=useState('');
  const [displayDate,setdisplayDate]=useState('');
  
  
  
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setdisplayDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
 

      return<><View style={{marginLeft:'5%',marginRight:'5%'}}>
        <ScrollView>
        <Text style={{ fontFamily: 'Inter-Black',fontSize:30,color:'#0289a9' ,textAlign:'center'}}>Baraat</Text>

<NikkaFiled placeholder="Input Groom Name" label="Groom Name" value={GroomName} setText={setGroomName} />
<DateField placeholder="Input Confirmation Date" label="Date" onPress={showDatepicker} value={displayDate} hasButtonHandler={true} />

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
<Button style={{marginTop:'10%',backgroundColor:'#0289a9'}} mode="contained">Submit</Button>
        </ScrollView>
  </View></>

    }