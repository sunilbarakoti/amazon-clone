/*
    - This is a component which takes the previous state of and returns the next state based on the action types.
    - Intial state of the application has intialiazed inside the initialState object.
    - getBasketTotal() calculates the total amount inside the baset and returns the sum.

*/

export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => amount + item.price, 0);
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user }
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };

            break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) `);
            }

            console.log("The new basket items are :", newBasket);
            return { ...state, basket: newBasket };
            break;
        default:
            return state;
    }
}

export default reducer;