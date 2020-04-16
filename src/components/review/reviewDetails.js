import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../../../styles/global';

function ReviewDetails({navigation}){
    const pressHandler = () => {
        navigation.navigate('Home')
        //navigation.push('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
            <Button title="Go to home" onPress={pressHandler}></Button>
        </View>
    )
}
export default ReviewDetails;