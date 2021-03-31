import React from "react";
import {Button, StyleSheet, View} from "react-native";
import ListScreen from "./ListScreen";
import ButtonScreen from "./ButtonScreen";

const HomeScreen = ({navigation: {navigate}}) => {
    return (
        <View style={styles.main}>
            <Button
                title='Market'
                onPress={() => navigate('Markets')}
            />
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

export default HomeScreen;
