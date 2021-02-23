import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListScreen = () => {

    const employeeNames = [
        { data: 'mina' },
        { data: 'fadi' },
        { data: 'amine' },
        { data: 'big' }
    ];

    return <FlatList
        // horizontal
        data={employeeNames}
        keyExtractor={item => item.data}
        // showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Text style={styles.text}>{item.data}</Text>
        }
    />
};

const styles = StyleSheet.create({
    text: {
        color: 'red'
    }
})

export default ListScreen;

