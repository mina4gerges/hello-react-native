import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        width: '100%',
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default Header;