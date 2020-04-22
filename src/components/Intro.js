import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { WebView } from 'react-native-webview';

class Intro extends Component {
    saludo = () => {
        Alert.alert('Este es una alerata')
    }
    render() {
        return (
            <ImageBackground source={require('./assets/fondo-bin.jpg')} style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Image source={require('./assets/react.jpg')} style={styles.logo}></Image>
              </View>
              <View style={styles.headerRight}>
                <Button title="Login" mode="android" onPress={this.saludo}></Button>
              </View>
            </View>
            <View style={styles.body}>
              <TouchableOpacity>
                <Text style={styles.negrita}>Hola Mundo</Text>
                <TextInput placeholder="Nombre de usuario" 
                placeholderTextColor="white"
                maxLength={8}
                style={{ height: 40, borderColor: 'white', borderWidth: 1, padding: 1 }}></TextInput>
                <View style={{ height: 300, width:300 }}>
                  <WebView
                          style={ styles.WebViewContainer }
                          javaScriptEnabled={true}
                          domStorageEnabled={true}
                          source={{uri: 'https://www.youtube.com/embed/O6Fd9fzPDPQ' }}
                  />
                </View>
              </TouchableOpacity>
    
            </View>
          </ImageBackground>
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
      fontSize: 21,
      color: 'white'
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 50,
      resizeMode: 'contain'
    },
    WebViewContainer: {
      marginTop: (Platform.OS == 'android') ? 20 : 0,
    }
  })

export default Intro