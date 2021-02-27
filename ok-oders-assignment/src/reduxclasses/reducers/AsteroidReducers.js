import * as Action from '../actiontypes/AsteroidActionTypes';

const initial_state = {
    details: []
}

const asteroidReducer = (state = initial_state, action) => {
    const { details } = action;
    console.log(details, "reducer");
    switch (action) {
        case Action.GET_ASTEROID_DETAILS:
            return { ...state, details: action.details }
        default:
            return state
    }
};

export default asteroidReducer;