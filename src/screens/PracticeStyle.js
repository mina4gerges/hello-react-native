import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, Keyboard, StyleSheet} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import ButtonComp from "../components/ButtonComp";
import DefaultStyle from "../constants/default-style";
import ImageComp from "../components/ImageComp";

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
                <Text style={DefaultStyle.titleText}>
                    Hello from StartGameScreen
                </Text>
                <Text style={DefaultStyle.titleText} numberOfLines={1} ellipsizeMode='tail'>
                    This text will never wrap into a new line, instead it will be cut off like this if it is too lon...
                </Text>
                <TextInputComp placeholder='Type your name here'/>
                <ButtonComp label='Show Alert' onButtonPress={onButtonPress}/>
                <ImageComp
                    uri={'https://media.cntraveler.com/photos/5e0671381334d900088b0a27/16:9/w_1600%2Cc_limit/Switzerland-winter-wonderlands-GettyImages-898687414.jpg'}/>
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
    }
});

export default PracticeStyle;