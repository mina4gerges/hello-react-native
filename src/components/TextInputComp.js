import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputComp = ({placeholder}) => {

    const [textValue, setTextValue] = useState('');

    const onChangeText = value => setTextValue(value);

    return (
        <TextInput
            value={textValue}
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingVertical: 3,
        borderColor: 'black',
        paddingHorizontal: 10
    }
})

export default TextInputComp;