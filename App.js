import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})

export default HelloWorld