import React from "react";
import {Button, StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation, useTheme} from '@react-navigation/native';

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
                title='Save Data To DB Screen'
                onPress={() => navigate('SaveDataToDB')}
            />
            <Button
                title='Image Picker'
                onPress={() => navigate('ImagePicker')}
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

    const {colors} = useTheme();

    return {
        headerTitle: 'Home',
        headerLeft: () => (
            <View>
                <TouchableOpacity onPress={navigation.toggleDrawer}>
                    <Ionicons name='menu' size={26} color={colors.text}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;
