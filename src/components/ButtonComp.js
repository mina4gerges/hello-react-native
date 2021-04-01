import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, Platform, Dimensions, StyleSheet} from "react-native";
import colors from "../constants/colors";

const ButtonComp = ({label, onButtonPress}) => {

    const [width, setWidth] = useState(Dimensions.get('window').width / 3);

    useEffect(() => {
        const updateWidth = () => setWidth(Dimensions.get('window').width / 3);

        Dimensions.addEventListener('change', updateWidth);

        return () => Dimensions.removeEventListener('change', updateWidth);
    })

    //! N.B: we can use:
    //! Platform.OS === 'android' || Platform.OS === 'ios'
    //! Platform.Version >= 21 (for ex)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onButtonPress}
            style={{
                ...styles.buttonBase,
                ...Platform.select({android: styles.buttonAndroid, ios: styles.buttonIOS}),
                width
            }}
        >
            <Text>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBase: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderColor: 'black',

        // Only property for IOS
        shadowRadius: 8,
        shadowOpacity: 0.8,
        shadowColor: colors.primary,
        shadowOffset: {width: 0, height: 2},

        // Only property for Android:
        elevation: 5,
    },
    buttonIOS: {
        backgroundColor: 'grey',
    },
    buttonAndroid: {
        backgroundColor: 'white',
    }
})

export default ButtonComp;
