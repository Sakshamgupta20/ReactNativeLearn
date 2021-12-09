import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

function TextScreen() {

    const [password, setPassword] = useState('')
    return <View>
        <TextInput
            onChangeText={(value) => setPassword(value)}
            value={password}
            style={styles.input}
            autoCapitalize='none'
            placeholder='Enter password'
            autoCorrect={false}>
        </TextInput>
        {password.length < 6 && <Text>Password must be greater then 5 characters.</Text>}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});
export default TextScreen;