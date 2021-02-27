import * as Action from '../actiontypes/AsteroidActionTypes';

export const getAsteroidDetails = (details) => {
    console.log('====================================');
    console.log(details, "details");
    console.log('====================================');
    return {
        type: Action.GET_ASTEROID_DETAILS,
        details
    }
}