import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const ButtonComp = ({label, onButtonPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <Text>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderColor: 'black',
        backgroundColor: 'white',

        // Only property for IOS
        shadowRadius: 8,
        shadowOpacity: 0.8,
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 2},

        // Only property for Android:
        elevation: 5,
    }
})

export default ButtonComp;
