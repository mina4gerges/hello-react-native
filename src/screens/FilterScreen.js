import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Switch, Alert, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons";

const FilterScreen = () => {

    const navigation = useNavigation();

    const [value, setValue] = useState(false);

    const sayHello = useCallback(() => Alert.alert('hello'), []);

    useEffect(() => {
        navigation.setOptions({
            save: sayHello
        })
    }, [sayHello])

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

export const screenOptions = () => {

    const navigation = useNavigation();
    const route = useRoute();

    return {
        headerTitle: 'Filter Screen',
        headerRight: () => (
            <TouchableOpacity onPress={route?.params?.save}>
                <Ionicons name='save' size={26}/>
            </TouchableOpacity>
        ),
        headerLeft: () => (
            <View>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Ionicons name='menu' size={26}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FilterScreen;
