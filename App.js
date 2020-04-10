import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
 
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Grace',
      user: 'peque'
    }
  }
  toogleUser = () => {
    let { name } = this.state 
    if (name === 'Grace') {
      this.setState({
        user: 'Larry',
        name: 'Raul'
      })
    }else {
      this.setState({
        user: 'peque',
        name: 'Grace'
      })
    }
  }
  render() {
    let { name, user } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Manejo del Estado</Text>
        <Text>Name: {name}</Text>
        <Text>User: {user} </Text>
        <Button title="Toogle usuario" onPress={this.toogleUser  }></Button>
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