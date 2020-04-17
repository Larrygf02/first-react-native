import { createStackNavigator } from 'react-navigation-stack'
import Home from '../src/components/review/home'
import ReviewDetails from '../src/components/review/reviewDetails'
import Header from '../shared/header'
import React from 'react'
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            //headerStyle: { backgroundColor: '#eee' }
        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default HomeStack