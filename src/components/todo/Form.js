import React, { useState } from 'react';
import { StyleSheet,View, Text, TextInput, Button } from 'react-native'

function Form({submitHandler}) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="New Item..."
            onChangeText={changeHandler}>
            </TextInput>
            <Button onPress={() => submitHandler(text)} title="Add" color='coral'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default Form