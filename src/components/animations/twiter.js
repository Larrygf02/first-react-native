import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Animated } from 'react-native'

HEADER_MIN_HEIGHT = 70
HEADER_MAX_HEIGHT = 120
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

class Twiter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }
  render() {

    const headerHeight= this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const profileImageHeight= this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const profileImageMarginTop= this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/ 2), HEADER_MAX_HEIGHT + 5],
      extrapolate: 'clamp'
    })

    const headerZindex= this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0,1],
      extrapolate: 'clamp'
    })

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
      ],
      outputRange: [-20,-20, -20, 0],
      extrapolate: 'clamp'
    })
    return (
      <View styles={{ flex: 1 }}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center'
        }}>
            <Animated.View style={{position: 'absolute', bottom: headerTitleBottom}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Ernesto</Text>
            </Animated.View>

        </Animated.View>
        <ScrollView scrollEventThrottle={16} onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
        )}>
          <Animated.View style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT/2,
            borderColor: 'white',
            borderWidth: 3,
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
            marginLeft: 10
          }}>
            <Image source={require('../../../assets/face-man.jpg')} style={{ flex: 1, width: null, height: null}}></Image>
          </Animated.View>
          <View>
            <Text style={styles.profile_text}>Ernesto</Text>
          </View>
          <View style={{height: 10000}}></View>
        </ScrollView>
      </View>
    )
  }
}

export default Twiter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightskyblue'
  },
  image: {
    height: PROFILE_IMAGE_MAX_HEIGHT,
    width: PROFILE_IMAGE_MAX_HEIGHT,
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT/2,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/ 2),
    marginLeft: 10
  },
  profile_text: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 10
  }
})