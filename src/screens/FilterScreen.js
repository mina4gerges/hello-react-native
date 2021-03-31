import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Switch, Alert, StyleSheet} from "react-native";

const FilterScreen = ({navigation}) => {

    const [value, setValue] = useState(false);

    const sayHello = useCallback(() => Alert.alert('hello'), []);

    useEffect(() => {
        navigation.setParams({
            save: sayHello
        })
    }, [ sayHello])

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>
                    First filter
                </Text>
                <Switch
                    value={value}
                    thumbColor='red'
                    style={styles.switch}
                    trackColor={{true: 'blue'}}
                    onValueChange={(newValue) => setValue(newValue)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        fontWeight: 'bold',
        margin: 5,
    },
    switch: {
        margin: 5
    }
})

export default FilterScreen;
