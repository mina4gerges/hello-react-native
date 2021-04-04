import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";

import store from '../store/store';
import Markets from "./Markets";
import MarketDetail from "./MarketDetail";

const MarketMain = () => {

    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Markets"
                    component={Markets}
                />
                <Stack.Screen
                    name="MarketDetail"
                    component={MarketDetail}
                />
            </Stack.Navigator>
        </Provider>
    )
}

export default MarketMain;
