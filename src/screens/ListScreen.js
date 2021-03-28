import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const ListScreen = () => {

    const employeeNames = [
        {data: 'mina'},
        {data: 'fadi'},
        {data: 'amine'},
        {data: 'big'}
    ];

    return (
        <View style={styles.main}>
            <FlatList
                // horizontal
                data={employeeNames}
                keyExtractor={item => item.data}
                // showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Text style={styles.text}>{item.data}</Text>
                }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'grey',
    },
    text: {
        color: 'red'
    }
})

export default ListScreen;

