import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BoxScreen() {
    return <View style = {styles.viewStyle}>
        <View style = {styles.viewOneStyle}></View>
        <View style = {styles.viewTwoStyle}></View>
        <View style = {styles.viewThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 200,
        borderWidth: 1
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'pink',
        borderWidth: 1
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        borderWidth: 1,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        borderWidth: 1
    },
});
export default BoxScreen;