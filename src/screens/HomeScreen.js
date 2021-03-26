import React from "react";
import {Button, StyleSheet, View} from "react-native";
import ListScreen from "./ListScreen";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = ({navigation: {navigate}}) => {
    return (
        <View style={styles.main}>
            <Button
                title='Market'
                style={styles.button}
                onPress={() => navigate('Markets')}
            />
            <Button
                title='Screen Layout'
                style={styles.button}
                onPress={() => navigate('ScreenLayout')}
            />
            <Button
                title='List Screen'
                style={styles.button}
                onPress={() => navigate('ListScreen')}
            />
            <Button
                title='Component Screen'
                style={styles.button}
                onPress={() => navigate('ComponentScreen')}
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
