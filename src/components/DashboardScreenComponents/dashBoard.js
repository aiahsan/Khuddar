import React,{useState,useEffect} from 'react';
import {Text,ScrollView,StyleSheet} from 'react-native'
import DashBoardButton from './dashboardButton'

import {Row,Col,Grid} from 'react-native-easy-grid'

export default Dashboard=(props)=>{

   
    return(<>
           <ScrollView style={}>
           <Grid>
                <Row><Col  style={styles.colStyle}><DashBoardButton title="buy with profit" wordbreak={false} imgUri={require('../../icons/cashboard.png')}   Navigationprops={props}></DashBoardButton></Col>
                <Col  style={styles.colStyle}><DashBoardButton title="win for cash" wordbreak={false} imgUri={require('../../icons/cdeal.png')}   Navigationprops={props}></DashBoardButton></Col></Row>
                
                <Row><Col  style={styles.colStyle}><DashBoardButton title="play for enjoy" wordbreak={false} imgUri={require('../../icons/Game1.png')}  Navigationprops={props}></DashBoardButton></Col>
                <Col  style={styles.colStyle}><DashBoardButton title="sucess with development" wordbreak={true} imgUri={require('../../icons/job1.png')} Navigationprops={props}></DashBoardButton></Col></Row>
                <Row><Col  style={styles.colStyle}><DashBoardButton title="shadi mubarak" wordbreak={false} imgUri={require('../../icons/shadi.png')}  Navigationprops={props}></DashBoardButton></Col>
                <Col  style={styles.colStyle}><DashBoardButton title="happy managment" wordbreak={true} imgUri={require('../../icons/hpm.png')}  Navigationprops={props}></DashBoardButton></Col></Row>
                
                <Row><Col  style={styles.colStyle}><DashBoardButton title="cash affilate" wordbreak={false} imgUri={require('../../icons/cashboard.png')}  Navigationprops={props}></DashBoardButton></Col>
                <Col  style={styles.colStyle}><DashBoardButton title="coffin funrel" wordbreak={false} imgUri={require('../../icons/coffin.png')}  Navigationprops={props}></DashBoardButton></Col></Row>
            </Grid>
           </ScrollView>
    </>)
}


const styles=StyleSheet.create({

    colStyle:{width:'45%',margin:'2.5%'},
    scrollStyle:{paddingBottom:25,backgroundColor:'#f6f7fb'}
})



