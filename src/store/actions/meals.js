export const REMOVE_MEAL = 'REMOVE_MEAL';
export const ADD_MEAL = 'ADD_MEAL';
export const FETCH_MEALS = 'FETCH_MEALS';

export const removeMeals = id => {
    return {type: REMOVE_MEAL, payload: {id}};
}

export const fetchMeals = () => {
    return async dispatch => {
        const response = await fetch('https://hello-react-native-adee7-default-rtdb.firebaseio.com/products.json')

        let meals = await response.json();

        meals = Object.values(meals);

        dispatch({type: FETCH_MEALS, data: meals});
    }
}

export const addMeal = meal => {
    return async dispatch => {

        if (meal.name)
            await fetch('https://hello-react-native-adee7-default-rtdb.firebaseio.com/products.json', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: meal.id,
                    name: meal.name
                })
            })

        dispatch({type: ADD_MEAL, data: meal});
    }
}
