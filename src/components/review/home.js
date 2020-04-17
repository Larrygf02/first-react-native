import React , { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../styles/global';

function Home({navigation}){
    const [reviews, setReviews ] = useState([
        { title: 'Pacman', rating: 4, body: 'lorem ipsum', key: '1'},
        { title: 'Golang', rating: 5, body: 'lorem ipsum', key: '2'},
        { title: 'My first book', rating: 13, body: 'lorem ipsum', key: '3'}
    ])  
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
        //navigation.push('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}></FlatList>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="Go to review" onPress={pressHandler}></Button> */}
        </View>
    )
}

export default Home;