import React from "react";
import {Button, StyleSheet, View} from "react-native";
import ListScreen from "./ListScreen";
import ComponentScreen from "./ComponentScreen";

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
                title='Component Screen'
                onPress={() => navigate('ComponentScreen')}
            />
            <Button
                title='Practice Flex Box'
                onPress={() => navigate('PracticeFlexBox')}
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
