import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputComp = ({returnKeyType = 'next', placeholder, keyboardType = 'default'}) => {

    const [textValue, setTextValue] = useState('');

    const onChangeText = value => setTextValue(value);

    return (
        <TextInput
            autoFocus={true}
            autoCapitalize='none'
            style={styles.textInput}
            onChangeText={onChangeText}
            value={textValue}
            placeholder={placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        borderWidth: 1,
        paddingVertical: 3,
        borderColor: 'black',
        paddingHorizontal: 10
    }
})

export default TextInputComp;