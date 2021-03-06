import React, {useCallback, useEffect, useState} from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    StyleSheet,
    Dimensions
} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";
import TextComp from "../components/TextComp";

const PracticeStyle = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [height, setHeight] = useState(Dimensions.get('window').height);

    const onButtonPress = useCallback(() => {
        Alert.alert(
            "Hello I am title",
            `You name is '${name}' and the number is '${number}'`,
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

    useEffect(() => {
        const updateHeight = () => setHeight(Dimensions.get('window').height);

        Dimensions.addEventListener('change', updateHeight);

        return () => Dimensions.removeEventListener('change', updateHeight);
    })

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            // keyboardVerticalOffset={Platform.select({android: 500, ios: 100})}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={styles.container}>
                    <View style={{...styles.startGameScreen, height}}>
                        <TextComp text='Hello from StartGameScreen'/>
                        <TextComp
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            text='This text will never wrap into a new line, instead it will be cut off like this if it'
                        />
                        <TextInputComp
                            placeholder='Type your name here'
                            onChange={(newName) => setName(newName)}
                        />
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
                        <TextInputComp
                            keyboardType='numeric'
                            placeholder='Type a number here'
                            onChange={(newNumber) => setNumber(newNumber)}
                        />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    },
    startGameScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aaa',
    },
    buttonGroup: {
        flexDirection: 'row'
    }
});

export default PracticeStyle;