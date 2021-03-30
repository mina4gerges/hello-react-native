import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputComp = ({
                           returnKeyType = 'next',
                           autoCapitalize = 'none',
                           keyboardType = 'default',
                           autoFocus = false,
                           placeholder
                       }) => {

    const [textValue, setTextValue] = useState('');

    const onChangeText = value => setTextValue(value);

    return (
        <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}

            value={textValue}
            autoFocus={autoFocus}
            placeholder={placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
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