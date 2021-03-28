import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, Keyboard, StyleSheet} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import ButtonComp from "../components/ButtonComp";

const PracticeStyle = () => {

    const onButtonPress = () => {
        Alert.alert(
            "Hello I am title",
            "Me, I am a message",
            [{
                text: 'Ok',
                style: 'destructive',
                onPress: () => console.log("I pressed Ok")
            }, {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => console.log("I pressed cancel")
            }])
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.startGameScreen}>
                <Text style={styles.text}>
                    Hello from StartGameScreen
                </Text>
                <TextInputComp placeholder='Type your name here'/>
                <ButtonComp label='Show Alert' onButtonPress={onButtonPress}/>
            </View>
        </TouchableWithoutFeedback>
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