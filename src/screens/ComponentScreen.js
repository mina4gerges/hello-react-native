import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ComponentScreen = ({ navigation }) => {
    return <View>
        <Text style={styles.text}>
            hello from Component Search
        </Text>

        <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title='Go To Components Demo'
        />

        <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
            <Text>
                Hello From Touchable Opacity
            </Text>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    }
});

export default ComponentScreen;

