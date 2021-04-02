import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import Market from "./Market";
import {fetchMarketItems} from "../store/actions/market";

const Markets = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMarketItems());
    }, []);

    const {marketItems} = useSelector(state => state.market);

    return (
        <View style={styles.main}>
            <FlatList
                data={Object.keys(marketItems)}
                keyExtractor={item => item}
                renderItem={({item}) => <Market title={item} items={marketItems[item]}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#2D2D2D'
    }
})

export default Markets;
