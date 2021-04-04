import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, Platform, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import Market from "./Market";
import {fetchMarketItems} from "../store/actions/market";
import {useNavigation, useTheme} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const Markets = () => {

    const {colors} = useTheme();

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const {marketItems} = useSelector(state => state.market);

    useEffect(() => {
        dispatch(fetchMarketItems());
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Markets',
            headerLeft: () => (
                <TouchableOpacity onPress={navigation.toggleDrawer}>
                    <Ionicons
                        size={30}
                        color={colors.text}
                        name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={showAlert}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'cart'} size={30} color='tomato'/>
                </TouchableOpacity>
            ),
        })
    }, [])

    const showAlert = () => {
        Alert.alert('Hello from Market')
    }

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
    }
})

export default Markets;
