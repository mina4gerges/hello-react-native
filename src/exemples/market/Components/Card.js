import React from "react";
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const Card = ({image, title, description}) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={image}
                style={styles.img}
            >
                <View style={styles.imgTexts}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderRadius: 15,
        shadowColor: "#000",
        overflow:'hidden',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    img: {
        width: 150,
        height: 150,
        justifyContent: 'flex-end',
    },
    imgTexts: {
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    description: {
        textAlign: 'center',
        color: 'white',
    }
})

export default Card;
