import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoApp from './src/components/todo/TodoApp'

function App() {
  return (
    <View style={styles.container}>
      <TodoApp></TodoApp>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default App