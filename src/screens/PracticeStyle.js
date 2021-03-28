import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import ButtonComp from "../components/ButtonComp";

const PracticeStyle = () => {

    const onButtonPress = () => {
    };

    return (
        <View style={styles.startGameScreen}>
            <Text style={styles.text}>
                Hello from StartGameScreen
            </Text>
            <TextInputComp placeholder='Type your name here'/>
            <ButtonComp label='Click me' onButtonPress={onButtonPress}/>
        </View>
    )

}

const styles = StyleSheet.create({
    startGameScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});

export default PracticeStyle;