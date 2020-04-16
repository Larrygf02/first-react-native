import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/components/review/home'
import ReviewDetails from '../src/components/review/reviewDetails'

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)