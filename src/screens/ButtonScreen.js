import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import ButtonComp from "../components/ButtonComp";

const ButtonScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const {id} = route.params;

    return (
        <View style={styles.main}>

            <Text>
                {id}
            </Text>

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

