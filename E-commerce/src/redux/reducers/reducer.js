const initialState =  {
    carts:[]
}


export const CartReducer = (state = initialState,action) =>{
    // console.log("REDUCER ACTION",action);
    switch(action.type){
        case "ADD_TO_CART":
            console.log("REDUCER",action.payload);
            return{
                ...state,
                carts:[...state.carts , action.payload]
            }
            case "DELETEFROMCART":
                let fItem = state.carts.filter(x => x.id !== action.payload)
                return{
                    ...state,
                    carts:fItem
                }
                default:
                return state
    }
}




