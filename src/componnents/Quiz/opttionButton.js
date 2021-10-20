import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import { RadioButton,TouchableRipple } from 'react-native-paper';

export default function ({ ansewers,select }) {
    const [value, setValue] = React.useState();

    return (
        <View style={{ flex: 1, marginTop: '10%' }}>
            <RadioButton.Group onValueChange={value => 
                {
                    select(value);
                    setValue(value)
                }
                } value={value}>
                {ansewers.map(x => <TouchableOpacity onPress={()=>  {
                    select(x.id);
                    setValue(x.id)
                }} style={{ width: '95%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderColor: (x.id==value?"#21c5df":"#757575"), borderWidth: 1, marginBottom: 20,paddingLeft:15,paddingTop:5,paddingBottom:5,paddingRight:5,borderRadius:5,marginLeft:3 }}>
                    <Text numberOfLines={2} style={{ maxWidth:270,color: '#757575', marginTop: 7,fontFamily:'PoppinsMedium' }}>{x.answer}</Text>
                    <RadioButton color="#21c5df" uncheckedColor="#878c9d" value={x.id} />
                </TouchableOpacity>)}

            </RadioButton.Group>

        </View>
    );
}