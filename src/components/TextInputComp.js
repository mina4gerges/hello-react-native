import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const TextInputComp = ({
                           onChange,
                           errorMsg,
                           placeholder,
                           returnKeyType = 'next',
                           autoCapitalize = 'none',
                           keyboardType = 'default',
                           autoFocus = false
                       }) => {

    const [textValue, setTextValue] = useState('');

    const onChangeText = value => setTextValue(value);

    useEffect(() => {
        onChange(textValue);
    }, [textValue])

    return (
        <View>
            <TextInput
                autoCorrect={false}
                returnKeyLabel='next'
                style={styles.textInput}
                onChangeText={onChangeText}

                value={textValue}
                autoFocus={autoFocus}
                placeholder={placeholder}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
            />
            {
                errorMsg ?
                    <Text style={styles.errorMsgText}>
                        {errorMsg}
                    </Text>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        borderWidth: 1,
        paddingVertical: 3,
        borderColor: 'black',
        paddingHorizontal: 10
    },
    errorMsgText: {
        color: 'red',
    }
})

export default TextInputComp;
