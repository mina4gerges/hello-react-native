import React from "react";
import {Button, Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';

import ListScreen from "./ListScreen";
import ButtonScreen from "./ButtonScreen";
import {Ionicons} from "@expo/vector-icons";

const HomeScreen = () => {

    const {navigate} = useNavigation();

    return (
        <View style={styles.main}>
            <Button
                title='Screen Layout'
                onPress={() => navigate('ScreenLayout')}
            />
            <Button
                title='List Screen'
                onPress={() => navigate('ListScreen')}
            />
            <Button
                title='Button Screen'
                onPress={() => navigate('ButtonScreen', {id: 123})}
            />
            <Button
                title='Practice Flex Box'
                onPress={() => navigate('PracticeFlexBox')}
            />
            <Button
                title='Practice Style'
                onPress={() => navigate('PracticeStyle')}
            />
            <Button
                title='Meals Screen'
                onPress={() => navigate('MealsScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around'
    },
})

export const screenOptions = () => {

    const navigation = useNavigation();

    return {
        headerTitle: 'Home',
        headerLeft: () => (
            <View>
                <TouchableOpacity onPress={navigation.toggleDrawer}>
                    <Ionicons name='menu' size={26} color={Platform.OS === 'ios' ? 'black' : 'white'}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;
