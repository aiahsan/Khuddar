import * as React from 'react';
import { TouchableOpacity,Text,Image,Dimensions ,Alert } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const width=Dimensions.get('screen').width;
const MyComponent = ({title,src,onPress,imageStyle,islock}) => (
  
    <TouchableOpacity onPress={islock!=undefined&&islock!=false?onPress:()=>{ Alert.alert(
        "Dues Alers",
        "Dues are pending please complete your dues to unlock it",
        [
          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );}}>
          {
              console.log(islock)
          }
        <Card style={{paddingRight:15,paddingLeft:17,padding:15,borderRadius:10}}>
           {islock==false?<Image resizeMode="stretch" style={[{width:width/3,height:width/3},{...imageStyle}]} source={require('../../images/home/lock.png')}/>: <Image resizeMode="stretch" style={[{width:width/3,height:width/3},{...imageStyle}]} source={src}/>
}
<Text numberOfLines={1} ellipsizeMode="tail" style={{fontFamily:'PoppinsBold',fontSize:RFValue(18),color:'#6e6e6e',textAlign:'center',position:'relative'}}>{title}</Text>
    
    </Card>
  
    </TouchableOpacity>
    );

export default MyComponent;