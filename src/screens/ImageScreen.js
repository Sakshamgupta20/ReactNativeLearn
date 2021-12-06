import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen() {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageScore={1}
                imageSource={require('../../assets/forest.jpg')}></ImageDetail>
            <ImageDetail
                title="Beach"
                imageScore={2}
                imageSource={require('../../assets/beach.jpg')}></ImageDetail>
            <ImageDetail
                title="Mountain"
                imageScore={3}
                imageSource={require('../../assets/mountain.jpg')}></ImageDetail>
        </View>
    );
}

const styles = StyleSheet.create({});
export default ImageScreen;