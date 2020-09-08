import React, { useRef, useState, useEffect ,useCallback,useMemo} from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Button, Snackbar } from 'react-native-paper';
import ListVideo from '../../components/earningWithVideosComponents/videoList'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default App = () => {
  const playerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [playList, setPlayList] = useState([
    {
      id: 1,
      videoId: 'vvzeLt3bLmo',
      source: 'youtube',
      duration: 8,
      amount: '3',
      title: 'Video 1sdfasfasdfsdfsdfdsafdsfsafdsfasfaffsdsadsadsadasdasdasdsadasdsa',
      thumbnail: 'https://i.ytimg.com/vi/6ztqBZpvYww/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD76GeU_PaFn8tJX-p0fndK5viNQ',


    },
    {
      id: 2,
      videoId: '6ztqBZpvYww',
      source: 'youtube',
      duration: 10,
      amount: '3',
      title: 'Video 2',
      thumbnail: 'https://i.ytimg.com/vi/6ztqBZpvYww/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD76GeU_PaFn8tJX-p0fndK5viNQ',

    },
    {
      id: 3,
      videoId: 'DGc76KnleFQ',
      source: 'youtube',
      duration: 15,
      amount: '3',
      title: 'Video 3',
      thumbnail: 'https://i.ytimg.com/vi/6ztqBZpvYww/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD76GeU_PaFn8tJX-p0fndK5viNQ',

    },
    {
      id: 4,
      videoId: '8IU0Duxa3DM',
      source: 'youtube',
      duration: 15,
      amount: '3',
      title: 'Video 4',
      thumbnail: 'https://i.ytimg.com/vi/6ztqBZpvYww/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD76GeU_PaFn8tJX-p0fndK5viNQ',

    },
    {
      id: 5,
      videoId: 'TruuV1P6hBo',
      source: 'youtube',
      duration: 15,
      amount: '3',
      title: 'Video 5',
      thumbnail: 'https://i.ytimg.com/vi/6ztqBZpvYww/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD76GeU_PaFn8tJX-p0fndK5viNQ',

    }
  ]);
  const [videoState, setVideoState] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [visibleMessage, setvisibleMessage] = useState(false);
  
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

const VideoPlayer = useMemo(() =>   <YoutubePlayer onChangeState={event => {
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
}} play={playing} height={400} width={'100%'} ref={playerRef} videoId={playList[currentVideoIndex].videoId} /> , [currentVideoIndex]);

  return (
    <View style={{flex:1}}>
   <View style={{flex:.6}}>
 {
   VideoPlayer
 }
   
   </View>
     <View style={{flex:1}}>
     <ScrollView>
<Text style={{marginLeft:'2%',fontWeight:'700'}}>Latest Videos</Text>
{playList.filter(y=>y.id!=playList[currentVideoIndex].id).map(x => <ListVideo video={x} nextVideo={handdleNextVideo}  />)}
</ScrollView>



     </View>
      <Snackbar
        visible={visibleMessage}
        onDismiss={() => setvisibleMessage(false)}
      >
        Congratulations 3 RS added to your account
      </Snackbar>
      <View style={{ position: 'absolute', right: 10, top: '15%', zIndex: 10 }}>
        <CountdownCircleTimer

          key={currentVideoIndex}
          isPlaying={videoState}
          duration={playList[currentVideoIndex].duration}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          strokeWidth={5}
          size={50}
          onComplete={() => {
            handleComplet(playList[currentVideoIndex].id);
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