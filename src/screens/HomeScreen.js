import React from "react";
import { Button, StyleSheet, View } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
    return <View style={styles.main}>
        <Button title='Screen Layout'
                style={styles.button}
                onPress={() => navigate('ScreenLayout')} />
        <Button title='Market'
                style={styles.button}
                onPress={() => navigate('Markets')} />
    </View>;
};

const styles = StyleSheet.create({
    main: {
        height: '50%',
        justifyContent: 'space-around'
    },
    button: {}
})

export default HomeScreen;
