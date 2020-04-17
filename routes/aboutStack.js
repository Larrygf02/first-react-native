import { createStackNavigator } from 'react-navigation-stack'
import Home from '../src/components/review/home'
import About from '../src/components/review/about'
import ReviewDetails from '../src/components/review/reviewDetails'
import Header from '../shared/header'
import React from 'react'

const screens = { 
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    }
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default AboutStack