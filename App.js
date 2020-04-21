import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

class App extends Component {
  render() {
    return (
      <View styles={{ flex: 1 }}>
        <View style={styles.header}></View>
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
    backgroundColor: 'lightskyblue',
    height: HEADER_MAX_HEIGHT
  }
})