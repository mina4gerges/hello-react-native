import React from 'react';

import {Ionicons} from '@expo/vector-icons';
import {Platform} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

import HomeScreen, {screenOptions as homeScreenOptions} from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import ScreenLayout from "./screens/ScreenLayout";
import Markets, {screenOptions as marketScreenOptions} from "./exemples/market/screens/Markets";
import PracticeFlexBox from "./screens/PracticeFlexBox";
import ButtonScreen from "./screens/ButtonScreen";
import PracticeStyle from "./screens/PracticeStyle";
import MealsScreen from "./screens/MealsScreen";
import FilterScreen, {screenOptions as filterScreenOptions} from "./screens/FilterScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? null : 'blue',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTileStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'ios' ? 'blue' : 'red',
}

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={homeScreenOptions}
            />
            <Stack.Screen
                name="ListScreen"
                component={ListScreen}
                options={{headerTitle: 'List Screen'}}
            />
            <Stack.Screen
                name="ScreenLayout"
                component={ScreenLayout}
                options={{headerTitle: 'Screen Layout'}}
            />
            <Stack.Screen
                name="PracticeFlexBox"
                component={PracticeFlexBox}
                options={{headerTitle: 'Practice Flex Box'}}
            />
            <Stack.Screen
                name="PracticeStyle"
                component={PracticeStyle}
                options={{headerTitle: 'Practice Style'}}
            />
            <Stack.Screen
                name="ButtonScreen"
                component={ButtonScreen}
                initialParams={{id: 42}}
                options={{headerTitle: 'Button Screen'}}
            />
            <Stack.Screen
                name="MealsScreen"
                component={MealsScreen}
                options={{headerTitle: 'Meals Screen'}}
            />
        </Stack.Navigator>
    )
}

const MarketStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name="Markets"
                component={Markets}
                options={marketScreenOptions}
            />
        </Stack.Navigator>
    )
}

const FilterStack = () => {

    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
                options={filterScreenOptions}
            />
        </Stack.Navigator>
    )
}

const MainBottomTabStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: 'Home !',
                    tabBarIcon: ({focused, color, size}) => {
                        const iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                }}/>
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    title: 'Market !',
                    tabBarIcon: ({focused, color, size}) => {
                        const iconName = focused ? 'fast-food' : 'fast-food-outline';
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                }}/>
        </Tab.Navigator>
    )
}

const MainDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{activeTintColor: 'red'}}>
            <Drawer.Screen
                name="HomeDrawer"
                component={MainBottomTabStack}
                options={{
                    drawerLabel: 'Home !',
                    drawerIcon: (props) => (
                        <Ionicons
                            size={props.size}
                            color={props.color}
                            name={Platform.OS === 'ios' ? 'ios-home' : 'home'}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="FilterDrawer"
                component={FilterStack}
                options={{
                    drawerLabel: 'Filter Screen !',
                    drawerIcon: (props) => (
                        <Ionicons
                            size={props.size}
                            color={props.color}
                            name={Platform.OS === 'ios' ? 'ios-filter' : 'filter'}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <MainDrawer/>
        </NavigationContainer>
    )
}

export default Routes;
