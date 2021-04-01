import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, Keyboard} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import ButtonComp from "../components/ButtonComp";
import {addMeal, fetchMeals, removeMeals} from "../store/actions/meals";
import TextInputComp from "../components/TextInputComp";

const MealsScreen = () => {

    const dispatch = useDispatch();

    const [newMeal, setNewMeal] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const {meals, errorMsg} = useSelector((state) => state.meals);

    useEffect(() => {

        setIsLoading(true);
        dispatch(fetchMeals())
            .then(() => setIsLoading(false));

    }, [])

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='green' size={20}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                    <View style={styles.addNewContainer}>
                        <TextInputComp
                            errorMsg={errorMsg}
                            returnKeyType='done'
                            autoCapitalize='sentences'
                            placeholder='Add new meal'
                            onChange={(newMeal) => setNewMeal(newMeal)}
                        />
                        <ButtonComp
                            label='Add'
                            onButtonPress={() => dispatch(addMeal({id: Date.now().toString(), name: newMeal}))}
                        />
                    </View>
                    {
                        meals.length > 0
                            ? meals.map(meal => {
                                return (
                                    <View key={meal.id} style={styles.meal}>
                                        <Text>{meal.name}</Text>
                                        <ButtonComp
                                            label='Delete'
                                            onButtonPress={() => dispatch(removeMeals(meal.id))}
                                        />
                                    </View>
                                )
                            })
                            : <Text>No meals</Text>
                    }
                </>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addNewContainer: {
        flexDirection: 'row'
    },
    meal: {
        flexDirection: 'row'
    }
})

export default MealsScreen;
