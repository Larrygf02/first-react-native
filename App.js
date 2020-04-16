import React, { useState } from 'react'
import * as Font from 'expo-font'
import Home from './src/components/review/home'
import { AppLoading } from 'expo'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <Home></Home>
    )
  }else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}>
      </AppLoading> 
    )
  }
}
export default App