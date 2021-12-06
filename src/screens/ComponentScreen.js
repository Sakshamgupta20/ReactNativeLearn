import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ComponentsScreen() {
    const greeting = <Text>Hello</Text>
    return (
        <View>
            <Text style={styles.textStyle}>Kya Haal Cha hai Component</Text>
            {greeting}
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;