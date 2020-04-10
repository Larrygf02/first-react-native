import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
function Layout({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10
    }
})
export default Layout