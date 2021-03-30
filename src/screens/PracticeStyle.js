import React, {useCallback} from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";
import TextComp from "../components/TextComp";

const PracticeStyle = () => {

    const onButtonPress = useCallback(() => {
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
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.startGameScreen}>
                        <TextComp text='Hello from StartGameScreen'/>
                        <TextComp
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            text='This text will never wrap into a new line, instead it will be cut off like this if it'
                        />
                        <TextInputComp placeholder='Type your name here' keyboardType='numeric'/>
                        <ButtonComp label='Show Alert' onButtonPress={onButtonPress}/>
                        <View style={styles.buttonGroup}>
                            <ButtonComp
                                onButtonPress={() => {
                                }}
                                label='First button'
                            />
                            <ButtonComp
                                onButtonPress={() => {
                                }}
                                label='Second button'
                            />
                        </View>
                        <ImageComp
                            uri={'https://media.cntraveler.com/photos/5e0671381334d900088b0a27/16:9/w_1600%2Cc_limit/Switzerland-winter-wonderlands-GettyImages-898687414.jpg'}
                        />

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa'
    },
    startGameScreen: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        flexDirection: 'row'
    }
});

export default PracticeStyle;