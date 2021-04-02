import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Cards from "../Components/Cards";

const Market = ({ title, items }) => {
    return <View style={styles.market}>
        <Text style={styles.marketTitle}>
            {title}
        </Text>
        <Cards items={items} />
    </View>

}

const styles = StyleSheet.create({
    market: {
        paddingTop: 10,
        paddingBottom: 10
    },
    marketTitle: {
        fontSize: 20,
        color: 'white',
        letterSpacing: 2,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default Market;
