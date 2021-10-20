import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import { Entypo, AntDesign } from '@expo/vector-icons';
import moment from 'moment'
const { block, set, greaterThan, lessThan, Value, cond, sub } = Animated
const IMAGE_SIZE = 200
const Width=Dimensions.get('window').width;

export default function ({ route }) {
  const trans = new Value(0)
  const untraversedPos = new Value(0)
  const prevTrans = new Value(0)
  const headerPos = block([
    cond(
      lessThan(untraversedPos, sub(trans, 100)),
      set(untraversedPos, sub(trans, 100))
    ),
    cond(
      greaterThan(untraversedPos, trans),
      set(untraversedPos, trans)
    ),
    set(prevTrans, trans),
    untraversedPos,
  ])
  const renderHeader = name => (
    <View
      style={styles.header}
    >
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.headingTop} >Sell your products on Amazon</Text>
      <View style={styles.headBottom}>
        <Entypo name="calendar" size={18} color="black" />
        <Text style={styles.dateText}>{moment(route.params.blog.date_created).format('DD/MM/yyyy')}</Text>
        {/* <AntDesign name="like1" size={18} color="black" /> */}
        {/* <Text style={styles.like}>2k</Text>
        <Entypo name="eye" size={18} color="black" />
        <Text style={styles.viewsText}>3k Views</Text>
        <TouchableOpacity style={styles.heartButton}>
          <View style={styles.heartView}>
            <Entypo name="heart" size={25} color="#f75d5c" style={styles.heart} />

          </View>
        </TouchableOpacity>
       */}
    </View>
    </View>
  )

  const renderInner = () => (
    <View style={styles.inner}>
      <Animated.View
        style={{

          zIndex: 1,
          transform: [
            {
              translateY: headerPos,
            },
          ],
        }}
      >
        {renderHeader('one')}
      </Animated.View>
      <View style={styles.description}>
    <Text>
    {route.params.blog.full_content}
    </Text>
  </View>
     
    </View>
  )
        
  return (
    <>
      <TopDrawer />
      <View style={styles.container}>
        <View style={{ flex: 1, }}>
          <Image source={{uri:route.params.blog.image}} style={{width:Width,height:Width/4}} resizeMode="contain" />
        </View>
        <BottomSheet
          contentPosition={trans}
          snapPoints={[400, 400]}
          renderContent={renderInner}
          style={{ backgroundColor: 'black' }}
        />
      </View>

    </>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white'
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  heart: { marginLeft: 8, marginTop: 10 },
  heartButton: {
    position: 'absolute', right: '5%', top: '-40%', shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 4, backgroundColor: 'white', borderRadius: 50
  },
  heartView: { borderRadius: 50, width: 40, height: 40 },
  viewsText: { marginLeft: 10, marginRight: 10 },
  like: { marginLeft: 10, marginRight: 10 },
  dateText: { marginLeft: 10, marginRight: 10 },
  headBottom: { flexDirection: 'row', marginTop: 10, marginLeft: 17, },
  headingTop: { color: '#1c1c1d', fontSize: 18, textAlign: 'auto', marginLeft: 20, marginRight: 10, marginTop: 10, fontFamily: 'PoppinsMedium', paddingTop: 12 },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#f5f5f5'
    , borderTopRightRadius: 20, borderTopLeftRadius: 20, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  description: { padding: 10 },
  inner: { backgroundColor: 'white', },
})




