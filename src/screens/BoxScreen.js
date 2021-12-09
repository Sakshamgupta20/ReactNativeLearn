import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BoxScreen() {
    return <View style = {styles.viewStyle}>
        <Text style = {styles.textOneStyle}>Text 1</Text>
        <Text style = {styles.textTwoStyle}>Text 2</Text>
        <Text style = {styles.textThreeStyle}>Text 3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch',
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 10
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 10,
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 10
    }
});
export default BoxScreen;