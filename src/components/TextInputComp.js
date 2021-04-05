import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {useTheme} from "@react-navigation/native";

const TextInputComp = ({
                           inputRef,
                           onChange,
                           errorMsg,
                           placeholder,
                           onSubmitEditing,
                           returnKeyType = 'next',
                           autoCapitalize = 'none',
                           keyboardType = 'default',
                           autoFocus = false,
                           blurOnSubmit = false,
                       }) => {

    const {colors} = useTheme();

    const [textValue, setTextValue] = useState('');

    const onChangeText = value => setTextValue(value);

    useEffect(() => {
        onChange(textValue);
    }, [textValue])

    return (
        <View>
            <TextInput
                ref={inputRef}
                autoCorrect={false}
                returnKeyLabel='next'
                onChangeText={onChangeText}
                style={{...styles.textInput, borderColor: colors.border, color: colors.text}}

                value={textValue}
                autoFocus={autoFocus}
                placeholder={placeholder}
                blurOnSubmit={blurOnSubmit}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                onSubmitEditing={onSubmitEditing}
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
        paddingHorizontal: 10
    },
    errorMsgText: {
        color: 'red',
    }
})

export default TextInputComp;
