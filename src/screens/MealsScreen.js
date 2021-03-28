import React from 'react';
import {Text, View} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import ButtonComp from "../components/ButtonComp";
import {removeMeals} from "../store/actions/meals";

const MealsScreen = () => {

    const dispatch = useDispatch();

    const meals = useSelector((state) => state.meals.meals);

    return (
        <View>
            {
                meals.length > 0
                    ? meals.map(meal => {
                        return (
                            <View key={meal.id}>
                                <Text>{meal.name}</Text>
                                <ButtonComp label={'DELETE ME'} onButtonPress={() => dispatch(removeMeals(meal.id))}/>
                            </View>
                        )
                    })
                    : <Text>No meals</Text>
            }
        </View>
    )
}

export default MealsScreen;