const initialState = {
    productDescription: null,
};

const productDescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT_DESCRIPTION":
            return {...state, productDescription: action.payload};

        default:
            return state;
    }
};

export default productDescriptionReducer;