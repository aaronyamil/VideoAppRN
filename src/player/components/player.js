import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';

import Video from 'react-native-video';
import Layout from '../containers/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullscreen';
import ProgessBar from '../components/progress-bar';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullScreen: false,
    duration: '00:00',
    currentTime: '00:00',
    time: 0,
  };
  sec2time = timeInSeconds => {
    var hours = Math.floor(timeInSeconds / 60 / 60);
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.round(timeInSeconds % 60);
    if (hours < 1) {
      return (
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0')
      );
    } else {
      return (
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0')
      );
    }
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
      currentTime: '00:00',
    });
  };
  onLoad = data => {
    this.setState({
      loading: false,
      // duration: new Date(data.duration).toLocaleTimeString(),
      currentTime: '00:00',
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  fullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen,
    });
    if (this.state.fullScreen) this.player.presentFullscreenPlayer();
    else this.player.dismissFullscreenPlayer();
  };
  onProgress = ({currentTime, seekableDuration}) => {
    this.setState({
      currentTime: this.sec2time(currentTime),
      duration: seekableDuration,
      time: currentTime,
    });
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            fullScreen={this.state.fullScreen}
            ref={ref => {
              this.player = ref;
            }}
            onProgress={this.onProgress}
            progressUpdateInterval={250}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout style={styles.content}>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgessBar
              duration={this.state.duration}
              currentTime={this.state.time}
            />
            <Text style={styles.currentTime}>{this.state.currentTime}</Text>
            <FullScreen
              style={styles.right}
              onPress={this.fullScreen}
              fullScreen={this.state.fullScreen}
            />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  right: {
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  currentTime: {
    color: 'white',
    marginRight: 5,
  },
});

export default Player;
