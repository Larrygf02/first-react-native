import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../../../styles/global';
import Card from '../../../shared/card';
import Icon from 'react-native-vector-icons/AntDesign';

function ReviewDetails({navigation}){
    const [icon, setIcon ] = useState('staro')
    const [puntaje, setPuntaje ] = useState(2)
    const stars = [1,2,3,4,5]
    const pressHandler = () => {
        navigation.navigate('Home')
        //navigation.push('ReviewDetails')
    }
    const setRating = () => {
        console.log('Hello')
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
                <View style={styles.ratings}>
                    {stars.map((indice) => {
                        let name = 'star'
                        if (indice > puntaje) {
                            name = 'staro'
                        }
                        return (
                            <Icon name={name} size={25} onPress={() => setPuntaje(indice)}/>
                        )
                    })}
                </View>
            </Card>
            <Button title="Go to home" onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    ratings: {
        flexDirection: 'row',
    }
})
export default ReviewDetails;