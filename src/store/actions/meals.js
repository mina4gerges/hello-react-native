export const REMOVE_MEAL = 'REMOVE_MEAL';

export const removeMeals = id => {
    return {type: REMOVE_MEAL, payload: {id}};
}