import React from 'react';
import {View, StyleSheet} from "react-native";
import ImagePickerComp from "../components/ImagePickerComp";

const ImagePickerScreen = () => {
    return (
        <View style={styles.container}>
            <ImagePickerComp/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        ,
    }
});

export default ImagePickerScreen;