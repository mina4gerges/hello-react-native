import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {TouchableOpacity, Platform, StatusBar} from 'react-native';
import {Provider} from "react-redux";

import store from '../store/store';
import Markets from "./Markets";
import MarketDetail from "./MarketDetail";

const MarketMain = () => {

    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <StatusBar
                animated={true}
                hidden={false}
                barStyle='light-content'
                backgroundColor="#61dafb"
                showHideTransition='none'
            />
            <Stack.Navigator>
                <Stack.Screen
                    name="Markets"
                    component={Markets}
                    options={marketsScreenOptions}
                />
                <Stack.Screen
                    name="MarketDetail"
                    component={MarketDetail}
                    options={marketDetailOptions}
                />
            </Stack.Navigator>
        </Provider>
    )
}

const marketsScreenOptions = () => {

    const navigation = useNavigation();

    return {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#212121',
            shadowOffset: {
                height: 0,
            },
        },
        headerRight: () => (
            <TouchableOpacity onPress={() => {
            }}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'cart'} size={30} color='tomato'/>
            </TouchableOpacity>
        ),
        headerLeft: () => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'} size={30} color='white'/>
            </TouchableOpacity>
        )
    }
}

export const marketDetailOptions = () => {
    return {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#212121',
            shadowOffset: {
                height: 0,
            },
        },
    }
}

export default MarketMain;
