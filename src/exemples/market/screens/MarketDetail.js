import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {useColorScheme} from "react-native-appearance";
import {useSelector} from "react-redux";

const MarketDetail = () => {

    const {colors} = useTheme();

    const scheme = useColorScheme();

    const navigation = useNavigation();

    const {params: {id, marketType}} = useRoute();

    const {marketItems} = useSelector(state => state.market);

    const {title, image, description} = marketItems[marketType].find(val => val.id === id)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `${title}`,
            // headerTintColor: 'white',
            // headerStyle: {
            //     backgroundColor: '#212121',
            //     shadowOffset: {
            //         height: 0,
            //     },
            // },
        })
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={styles.img}
            >
                <Text style={{
                    ...styles.description,
                    color: colors.text,
                    backgroundColor: scheme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'
                }}>
                    {description}
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    description: {
        textAlign: 'center',
    }
})

export default MarketDetail;