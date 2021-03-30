import React from 'react';
import {View, Image, Dimensions, StyleSheet} from "react-native";

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

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: width * 0.7 / 2,
        overflow: 'hidden',
        borderColor: 'black',
    },
    image: {
        width: width * 0.7,
        height: width * 0.7,
    }
})

export default ImageComp;