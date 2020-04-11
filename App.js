import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './src/components/todo/Header'
import Item from './src/components/todo/Item'

function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'Study english', key: '2'},
    { text: 'Learn react native', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header></Header>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item}) => (
          <Item item={item} pressHandler={pressHandler}></Item>
          )}></FlatList>
        </View>
      </View>
    </View>
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

export default App