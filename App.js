import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Grace',
      user: 'peque'
    }
  }
  render() {
    const { name, user } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Manejo del Estado</Text>
        <Text>Name: {name}</Text>
        <Text>User: {user} </Text>
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
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default HelloWorld