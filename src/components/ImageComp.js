import React from 'react';
import {View, Image, StyleSheet} from "react-native";

const ImageComp = ({uri, source}) => {
    return (
        <View style={styles.container}>
            <Image
                fadeDuration={100}
                style={styles.image}
                resizeMode='cover'
                source={uri ? {uri} : source}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 300,
        overflow: 'hidden',
        borderColor: 'black',
    },
    image: {
        width: 300,
        height: 300,
    }
})

export default ImageComp;