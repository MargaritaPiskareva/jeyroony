const initialState = {
    navigation: null,
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_ROUTE":
            return {...state, navigation: action.payload};

        default:
            return state;
    }
};

export default navigationReducer;