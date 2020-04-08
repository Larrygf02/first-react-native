import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('./assets/react.jpg')} style={styles.logo}></Image>
          </View>
          <View style={styles.headerRight}></View>
        </View>
        <View style={styles.body}>
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
  },
  body: {
    flex: 4,
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain'
  }
})

export default HelloWorld