import React from 'react';
import {ScrollView,Text,View} from 'react-native'
import GridHead from './gridHeading';
import ServiceGridRow from './servicesgridRow'
import { List } from 'react-native-paper';

export default function({selectedServices,availableServices,addItems})

{const [expanded, setExpanded] = React.useState(true);




    const handlePress = () => setExpanded(!expanded);
    return <>
        <GridHead title1="Name" title2="Quantity" title3="Action" />
    <ScrollView>
    <List.Section style={{padding:0,margin:0}}>
    {availableServices.map(x=> <List.Accordion
        title={x.serviceTypeName}
        left={props => <List.Icon {...props} icon="folder" />}>

            <View style={{marginLeft:-63,marginTop:-15}} >
            {
               x.servicesCategory.map(y=><ServiceGridRow typeName={x.serviceTypeName} addItems={addItems} value={y.type} count={"1"} id={y.id} />)
            }
            </View>
  </List.Accordion>)}

      </List.Section>

    </ScrollView>
   
    </>
}
//

/*




      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
   
*/