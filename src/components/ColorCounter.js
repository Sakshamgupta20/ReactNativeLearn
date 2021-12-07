import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList, Text } from 'react-native';

function ColorCounter({ color, onIncrease, onDecrease }) {
    return <View>
        <Text>{color}</Text>
        <Button onPress = {() => onIncrease()} title={`Increase ${color}`}></Button>
        <Button onPress = {() => onDecrease()} title={`Decrease ${color}`}></Button>
    </View>;
}

const styles = StyleSheet.create({});

export default ColorCounter;