import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Cards from "../Components/Cards";
import {useTheme} from "@react-navigation/native";

const Market = ({title, items}) => {

    const {colors} = useTheme();

    return <View style={styles.market}>
        <Text style={{...styles.marketTitle, color: colors.text}}>
            {title}
        </Text>
        <Cards items={items}/>
    </View>

}

const styles = StyleSheet.create({
    market: {
        paddingTop: 10,
        paddingBottom: 10
    },
    marketTitle: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default Market;
