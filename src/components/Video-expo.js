import React, { Component } from 'react';
import { Video } from 'expo-av'
class VideoExpo extends Component {
    render() {
        return (

            <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            useNativeControls={true}
            isLooping
            style={{ width: 300, height: 300 }}
          />
        )
    }
}

export default VideoExpo


