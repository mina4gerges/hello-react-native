import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import ScreenLayout from "./screens/ScreenLayout";
import Markets from "./exemples/market/screens/Markets";
import PracticeFlexBox from "./screens/PracticeFlexBox";
import ButtonScreen from "./screens/ButtonScreen";
import PracticeStyle from "./screens/PracticeStyle";
import MealsScreen from "./screens/MealsScreen";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="ButtonScreen"
                    component={ButtonScreen}
                    options={{title: 'Button Screen'}}
                />
                <Stack.Screen
                    name="ListScreen"
                    component={ListScreen}
                    options={{title: 'List Screen'}}
                />
                <Stack.Screen
                    name="ScreenLayout"
                    component={ScreenLayout}
                    options={{title: 'Screen Layout'}}
                />
                <Stack.Screen
                    name="Markets"
                    component={Markets}
                    options={{title: 'Markets'}}
                />
                <Stack.Screen
                    name="PracticeFlexBox"
                    component={PracticeFlexBox}
                    options={{title: 'Practice Flex Box'}}
                />
                <Stack.Screen
                    name="PracticeStyle"
                    component={PracticeStyle}
                    options={{title: 'Practice Style'}}
                />
                <Stack.Screen
                    name="MealsScreen"
                    component={MealsScreen}
                    options={{title: 'Meals Screen'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;