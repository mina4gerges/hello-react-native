import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
// !This package is used ONLY for debugging.
// !It should be removed when removing the app
import {composeWithDevTools} from 'redux-devtools-extension';

import Routes from "./src/Routes";
import mealsReducer from "./src/store/reducers/meals";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

const rootReducer = combineReducers({
    meals: mealsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {

    const [isLoading, setIsLoading] = useState(false);

    if (!isLoading) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setIsLoading(true)}
                onError={(e) => console.log(`Error ${e}`)}
            />
        )
    }

    return (
        <Provider store={store}>
            <View style={styles.app}>
                <Routes/>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    }
})

export default App;
