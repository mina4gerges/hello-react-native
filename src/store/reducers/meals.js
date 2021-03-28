import {REMOVE_MEAL} from "../actions/meals";

const initialState = {
    meals: [
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Burger'}
    ],
    filteredMeals: [],
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_MEAL:
            const newMeals = state.meals.filter(meal => meal.id !== action.payload.id);
            return {...state, meals: newMeals};
        default:
            return state;
    }
}

export default mealsReducer;