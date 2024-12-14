export  const addToCart = (item) =>{
    return{
        type:"ADD_TO_CART",
        payload: item
    }
}

export  const DELETEFROMCART = (id) =>{
    return{
        type:"DELETEFROMCART",
        payload: id
    }
}

