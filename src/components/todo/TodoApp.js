import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Item from './Item';
import Header from './Header';
import Form from './Form';

function TodoApp() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'Study english', key: '2'},
    { text: 'Learn react native', key: '3'},
  ]);

  const submitHandler = (text) => {
    if (text !== ""){
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString()},
          ...prevTodos,
        ]
      })
    }else {
      Alert.alert('Opps', 'Todos must be not empty')
    }
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header></Header>
        <View style={styles.content}>
          {/* to form */}
          <Form submitHandler={submitHandler}></Form>
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({item}) => (
            <Item item={item} pressHandler={pressHandler}></Item>
            )}></FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
})

export default TodoApp