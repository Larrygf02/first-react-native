import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

function ListUsers() {
    const [people, setPeople] = useState([
        { name: 'Grace', key: '1'},
        { name: 'Raul', key: '2'},
        { name: 'Josue', key: '3'},
        { name: 'Yeli', key: '4'},
        { name: 'Ernesto', key: '5'},
        { name: 'Juan', key: '6'},
    ])
    return (
        <View style={styles.container}>
            { people.map((item) => {
                return (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                )
            })}
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