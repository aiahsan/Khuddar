
import Types from './types'
export const addItemToCart=(data)=>{
    return { type: Types.addCartItem, payload: data }    
}
export const removeItemFromCart=(data)=>{
    return {type:Types.removeCartItem,payload:data}
}
export const removeSingleCartItem=(data)=>{
    return {type:Types.removeSingleCartItem,payload:data}
}
export const emptyCart=()=>{
    return {type:Types.emptyCart,payload:[]}

}

export const addNewOrder=(order)=>{
    return {type:Types.AddOrder,payload:order}

}
export const setOrders=(orders)=>{
    return {type:Types.ALlOrders,payload:orders}

}
