import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Provider} from "react-redux";

import Routes from "./src/Routes";
import store from "./src/store/store";
import {init} from "./src/helpers/db";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

// Init and create our db table
init()
    .then(() => {
        console.log("Initialized database ");
    })
    .catch(err => {
        console.log(`Initialized database failed: ${err}`);
    })

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
