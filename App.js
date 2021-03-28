import React from 'react';
import {View, StyleSheet} from 'react-native';

import Routes from "./src/Routes";

const App = () => {
    return (
        <View style={styles.app}>
            <Routes/>
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    }
})

export default App;
