
import Types from './types'
export const eaddItemToCart=(data)=>{
    return { type: Types.eaddCartItem, payload: data }    
}
export const eremoveItemFromCart=(data)=>{
    return {type:Types.eremoveCartItem,payload:data}
}
export const eremoveSingleCartItem=(data)=>{
    return {type:Types.removeSingleCartItem,payload:data}
}
export const eemptyCart=()=>{
    return {type:Types.eemptyCart,payload:[]}

}

export const eaddNewOrder=(order)=>{
    return {type:Types.eAddOrder,payload:order}

}
export const esetOrders=(orders)=>{
    return {type:Types.eALlOrders,payload:orders}

}
