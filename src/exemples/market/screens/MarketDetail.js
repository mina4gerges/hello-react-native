import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {useSelector} from "react-redux";

const MarketDetail = () => {
    const navigation = useNavigation();

    const {params: {id, marketType}} = useRoute();

    const {marketItems} = useSelector(state => state.market);

    const {title, image, description} = marketItems[marketType].find(val => val.id === id)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `${title}`,
        })
    }, [])

    return (
        <View style={styles.container}>
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
    container: {
        flex: 1,
        backgroundColor: '#2D2D2D',
    },
    img: {
        width: '100%',
        height: '100%',
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

export const screenOptions = () => {
    return {
        headerStyle: {
            backgroundColor: '#212121',
            shadowOffset: {
                height: 0,
            },
        },
        headerTintColor: 'white',
    }
}

export default MarketDetail;