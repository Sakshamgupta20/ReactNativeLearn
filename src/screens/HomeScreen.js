import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {

  const { navigate } = props.navigation;

  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => navigate('Components')}
      title="Go to Components Demo">
    </Button>

    <Button
      onPress={() => navigate('List')}
      title="Go to List Demo">
    </Button>

    <Button
      onPress={() => navigate('Image')}
      title="Go to Image Demo">
    </Button>

    <Button
      onPress={() => navigate('Counter')}
      title="Go to Counter Demo">
    </Button>

    <Button
      onPress={() => navigate('Color')}
      title="Go to Color Demo">
    </Button>

    <Button
      onPress={() => navigate('Square')}
      title="Go to Square Demo">
    </Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
