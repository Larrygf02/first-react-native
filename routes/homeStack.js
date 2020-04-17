import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/components/review/home'
import ReviewDetails from '../src/components/review/reviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            //headerStyle: { backgroundColor: '#eee' }
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

export default createAppContainer(HomeStack)