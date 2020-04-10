import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
class HelloWorld extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Titulo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default HelloWorld