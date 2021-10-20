import React, { useRef, useState, useEffect ,useCallback,useMemo, } from 'react';
import { View, Text, Animated, ScrollView,Dimensions,RefreshControl } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Button, Snackbar } from 'react-native-paper';
import ListVideo from '../../componnents/videos/videos'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp'
const Width=Dimensions.get('window').width;
import {styles} from '../../styles/authStyles'
import { repository } from '../../utiles/repository';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux'
export default App = () => {
  const playerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [videoState, setVideoState] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [visibleMessage, setvisibleMessage] = useState(false);
  const [currentDuraetion,setcurrentDuraetion]=useState(10);
  const userr=useSelector(x=>x.userReducer);


  let [showAnimation, setshowAnimation] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {

  (async function(){
      await fetchFamily();
      setRefreshing(false);

  })();
}, []);

 const fetchFamily= async function () {
      try {

          const { data, status } = await repository.videos({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
              if (status == 200 && data && data.success == true) {


              if (data.response.videos)
                  {

                      setPlayList(data.response.videos.map(x=>{
                        return {
                          ...x,
                          duration:parseInt(x.duration)
                        }
                      }));
                      // dispatch(All_Mart_Items(data.response.products))
                  }
                  
              setshowAnimation(false);
          }
          else {
              setshowAnimation(false);
          }
      }
      catch (e) {
          setshowAnimation(false);
      }
  };
  
  React.useEffect(() => {
      setshowAnimation(true);

      (async function(){
        await fetchFamily();
    })();
    

  }, []);
  

  const handdleNextVideo = (id) => {
  const indexVideo=  playList.findIndex(x => x.id ===id)  
  setVideoState(false);
  setPlaying(false);
  setCurrentVideoIndex(indexVideo);
}

const handleComplet=(id)=>{
const newplayList=playList.filter(x=>x.id!=id);



//setPlayList(newplayList,[]);
}

const VideoPlayer = useMemo(() =>   <YoutubePlayer webViewStyle={{backgroundColor:'black'}} onChangeState={event => {
 
  switch (event) {
    case 'paused': {
      setVideoState(false);
      setvisibleMessage(false);
      break;
    }
    case 'buffering': {
      setVideoState(false);
      setvisibleMessage(false);
      break;
    }
    case 'playing': {
      setVideoState(true);
      setvisibleMessage(false);
      break;
    }
  }
}} play={playing} height={Width/1.8} width={'100%'} ref={playerRef} 
videoId={playList.length>0&&playList[currentVideoIndex]&&playList[currentVideoIndex].videoId?playList[currentVideoIndex].videoId:""} 
// videoId="HSHzScg36k8" 
/>,[currentVideoIndex] );

  return (
 <View  style={[{ backgroundColor: 'white', flex: 1 }]}>
          <TopDrawer />
<View>
<ScrollView   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
      <View style={[styles.ctr,styles.mt5]}>
      <Heading head="Watch & Earn" label="Earn money by watching videos" type={true}  />
     
</View>
       
           {/* {playList.length>0 &&playList[currentVideoIndex] && playList[currentVideoIndex].videoId?VideoPlayer:<></>} */}
           {VideoPlayer}
<View style={[styles.ctr,styles.mt5]}>
<Heading head="Latest Videos" label="Watch and earn" />
{playList.filter(y=>y.id!=playList[currentVideoIndex].id).map(x => <ListVideo video={x} nextVideo={handdleNextVideo}  />)}

</View>
</ScrollView>
</View>
<Snackbar
        visible={visibleMessage}
        onDismiss={() => setvisibleMessage(false)}
      >
        Congratulations 3 RS added to your account
      </Snackbar>
      <View style={{ position: 'absolute', right: 10, top: '55%', zIndex: 10 }}>   
        <CountdownCircleTimer
          key={currentVideoIndex}
          isPlaying={videoState}
          duration={playList.length>0&&playList[currentVideoIndex]&&playList[currentVideoIndex].duration?playList[currentVideoIndex].duration:10}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          strokeWidth={5}
          size={50}
          onComplete={() => {
            handleComplet(playList.length>0&&playList[currentVideoIndex]&&playList[currentVideoIndex].id?playList[currentVideoIndex].id:0);
            setvisibleMessage(true);
            setTimeout(() => {
              setvisibleMessage(false);
            
            }, 4000);

          }}>
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>

      </View>
     
 </View>
    );
};