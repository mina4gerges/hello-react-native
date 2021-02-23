import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InputScreen = () => {

    const children = (
        <View style={styles.subMain}>
            <Text style={styles.text}>
                A
            </Text>
            {/*<Text style={{ ...styles.text, alignSelf: 'flex-start',position:'absolute' }}>*/}
            <Text style={{ ...styles.text, alignSelf: 'flex-start' }}>
                B
            </Text>
            <Text style={styles.text}>
                C
            </Text>
            <Text style={{ ...styles.text, flex: 3, alignSelf: 'flex-start', bottom: 10, backgroundColor: 'yellow' }}>
                D
            </Text>
            <Text style={styles.text}>
                E
            </Text>
            <Text style={{ ...styles.text, alignSelf: 'flex-start' }}>
                F
            </Text>
            <Text style={styles.text}>
                G
            </Text>
        </View>
    )

    return (
        <View style={styles.main}>
            {children}
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        height: '100%',
        borderWidth: 3,
        borderColor: 'blue',
        justifyContent: 'space-around',
    },
    subMain: {
        height: 100,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        textAlign: 'center',
        borderColor: 'red',
        alignSelf: 'flex-end'
    }
})

export default InputScreen;

