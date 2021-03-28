import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ButtonComp from "../components/ButtonComp";

const ButtonScreen = ({navigation}) => {

    return (
        <View style={styles.main}>

            <Button
                title='Go Back'
                onPress={() => navigation.pop()}
            />

            <ButtonComp
                label='Click me to navigation to List Screen'
                onButtonPress={() => navigation.navigate('ListScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
});

export default ButtonScreen;

