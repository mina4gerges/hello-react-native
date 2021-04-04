import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, Platform, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import Market from "./Market";
import {fetchMarketItems} from "../store/actions/market";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const Markets = () => {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const {marketItems} = useSelector(state => state.market);

    useEffect(() => {
        dispatch(fetchMarketItems());
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#212121',
                shadowOffset: {
                    height: 0,
                },
            },
            headerLeft: () => (
                <TouchableOpacity onPress={navigation.toggleDrawer}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'} size={30} color='white'/>
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
        backgroundColor: '#2D2D2D'
    }
})

export default Markets;
