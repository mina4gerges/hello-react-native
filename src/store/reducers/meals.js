import {ADD_MEAL, FETCH_MEALS, REMOVE_MEAL} from "../actions/meals";

const initialState = {
    meals: [],
    errorMsg: '',
};

const mealsReducer = (state = initialState, action) => {
    let newMeals = [];

    switch (action.type) {
        case FETCH_MEALS:
            return {...state, meals: action.data};
        case REMOVE_MEAL:
            newMeals = state.meals.filter(meal => meal.id !== action.payload.id);
            return {...state, meals: newMeals};
        case ADD_MEAL:
            let errorMsg = '';

            newMeals = state.meals;

            let newMeal = action.data;

            if (newMeal.name) {
                newMeals = [...newMeals, newMeal];
            } else
                errorMsg = 'Text input is empty';

            return {...state, meals: newMeals, errorMsg};
        default:
            return state;
    }
}

export default mealsReducer;
