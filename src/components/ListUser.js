import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'

function ListUsers() {
    const [people, setPeople] = useState([
        { name: 'Raul', key: '2'},
        { name: 'Josue', key: '3'},
        { name: 'Yeli', key: '4'},
        { name: 'Grace', key: '1'},
        { name: 'Ernesto', key: '5'},
        { name: 'Juan', key: '6'},
    ])
    return (
        <View style={styles.container}>
            <ScrollView>
                { people.map( item => (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'lightblue',
        fontSize: 24
    }
})
export default ListUsers