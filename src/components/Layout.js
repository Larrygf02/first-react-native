import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
function Layout({title}) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Layout