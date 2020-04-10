import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class LoginInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        name: '',
        isLogin: false
    };
  }
  login = () => {
      this.setState({
          isLogin: true
      })
  }
  logout = () => {
      this.setState({
          isLogin: false,
          user: '',
          name: ''
      })
  }

  render() {
    const { name, user } = this.state
    return (
      <View style={styles.container}>
        { this.state.isLogin ? 
        <View>
            <Text style={styles.title}>Bienvenido</Text>
            <Text>User: {user} </Text>
            <Text>Name: {name}</Text>
            <Button title="Logout" onPress={this.logout}></Button>
        </View>
        : 
        <View>
            <Text style={styles.title}>Login de Usuario</Text>
            <TextInput placeholder="User" onChangeText={ (user) => this.setState({ user})}></TextInput>
            <TextInput placeholder="Name" onChangeText={ (name) => this.setState({ name})}></TextInput>
            <Button title="Login" onPress={this.login}></Button>
        </View>
        }
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default LoginInit;
