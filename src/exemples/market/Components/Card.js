import React from "react";
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({image, title, description, id, marketType}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('MarketDetail', {id, marketType})}>
                <ImageBackground
                    source={image}
                    style={styles.img}>
                    <View style={styles.imgTexts}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        <Text style={styles.description} numberOfLines={1}>
                            {description}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderRadius: 15,
        shadowColor: "#000",
        overflow: 'hidden',
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
