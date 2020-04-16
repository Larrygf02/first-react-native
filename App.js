import React, { useState } from 'react'
import * as Font from 'expo-font'
import Home from './src/components/review/home'
import { AppLoading } from 'expo'
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <Navigator></Navigator>
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