import React from 'react';
import {Text, StyleSheet} from "react-native";
import DefaultStyle from "../constants/default-style";

const TextComp = ({text, numberOfLines, ellipsizeMode}) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
            style={[DefaultStyle.titleText, styles.text]}
        >
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'red'
    }
})

export default TextComp;