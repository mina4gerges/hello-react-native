import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';

const Card = ({ image, title, description }) => {
    return (
        <View style={styles.card}>
            <Image
                source={image}
                style={styles.img}
            />
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        color: 'grey',
        textAlign: 'center'
    }
})

export default Card;
