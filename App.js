import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'

class HelloWorld extends Component {
  saludo = () => {
    Alert.alert('Este es una alerta')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('./assets/react.jpg')} style={styles.logo}></Image>
          </View>
          <View style={styles.headerRight}>
            <Button title="Login" onPress={this.saludo}></Button>
          </View>
        </View>
        <View style={[styles.body, styles.negrita]}>
          <Text>Hola Mundo</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    marginTop:40
  },
  body: {
    flex: 4,
    alignItems: 'center'
  },
  negrita: {
    fontWeight: 'bold',
    fontSize: 20
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain'
  }
})

export default HelloWorld