import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ScreenLayout from "./src/screens/ScreenLayout";
import Markets from "./src/exemples/market/screens/Markets";

const navigator = createStackNavigator(
    {
        Markets,
        HomeScreen,
        ListScreen,
        ScreenLayout,
        ComponentScreen,
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            title: 'HELLO REACT NATIVE',
        },
    }
);

export default createAppContainer(navigator);
