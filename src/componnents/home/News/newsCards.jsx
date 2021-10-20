import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import {styles} from '../../../styles/authStyles'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = ({src,hasButton,short_content,title,date_created,handlePress}) => (
  <Card style={{marginBottom:RFValue(20)}}>
    <Card.Cover source={{ uri: src }} />
    <Card.Content>
      <Title style={[styles.PoppinsMedium,{fontSize:16}]}>{title}</Title>
      <Paragraph style={[styles.PoppinsThin,{marginTop:-RFValue(5),fontSize:12,lineHeight:15}]} numberOfLines={3}>{short_content}</Paragraph>
    
    </Card.Content>
   {hasButton?  <Card.Actions>
      <Button onPress={handlePress} >Select</Button>
      <Button></Button>
    </Card.Actions>:<></>}
    </Card>
);

export default MyComponent;