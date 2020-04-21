import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Animated } from 'react-native'

HEADER_MIN_HEIGHT = 70
HEADER_MAX_HEIGHT = 120
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

class App extends Component {

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
    return (
      <View styles={{ flex: 1 }}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight
        }}></Animated.View>
        <ScrollView scrollEventThrottle={16} onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
        )}>
          <View style={styles.image}>
            <Image source={require('./assets/face-man.jpg')} style={{ flex: 1, width: null, height: null}}></Image>
          </View>
          <View>
            <Text style={styles.profile_text}>Ernesto</Text>
          </View>
          <View style={{height: 10000}}></View>
        </ScrollView>
      </View>
    )
  }
}

export default App;
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