import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ScreenLayout from "./src/screens/ScreenLayout";
import Markets from "./src/exemples/market/screens/Markets";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="ComponentScreen"
                    component={ComponentScreen}
                    options={{title: 'Component Screen'}}
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
