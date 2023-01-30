import { LIKE_TYPES } from './likeTypes';

export const LIKE_INITIAL_STATE = {
    likedItems: []
};

export const likesReducer = (state=LIKE_INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch (type) {
        case LIKE_TYPES.ADD_LIKES:
            return {
                ...state,
                likedItems: state.likedItems.concat(payload)
            }
        case LIKE_TYPES.REMOVE_LIKES:
            return {
                ...state,
                likedItems:state.likedItems.splice(0,state.likedItems.length,...payload)
            };
        case LIKE_TYPES.CLEAR_LIKES:
            return {
                ...state,
                likedItems:LIKE_INITIAL_STATE,
            };
        default:
            return state
    }
};
