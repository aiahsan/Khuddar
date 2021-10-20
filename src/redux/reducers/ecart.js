import types from '../actions/types'
import _ from 'lodash';

var mainCart = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    discounted_price: 0,
    discount: 0,
    coupun: null,
    coupun_discount: 0,
    payment: 0,
    delivery: 0,
    card_number: '',
    cvc: '',
    name: '',
    expiry: ''
};
var mainCartEmpty = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    discounted_price: 0,
    discount: 0,
    coupun: null,
    coupun_discount: 0,
    payment: 0,
    delivery: 0,
    card_number: '',
    cvc: '',
    name: '',
    expiry: ''
};
export const ecart = (state =mainCart, action) => {
    
    if (action.type == types.eaddCartItem) {
        let cartItem=_.find(state.items,x=>x.id==action.payload.id);
      
        let item=action.payload;
        if(cartItem)
        {
            console.log(cartItem,"sssss")
            cartItem.quantity+=1;
            cartItem.price=cartItem.quantity*parseFloat(item.price);
            cartItem.discounted_price=cartItem.quantity*parseFloat(item.discounted_price);
                //state.totalItems=state.totalItems+1;
                state.totalPrice=state.totalPrice+parseFloat(item.price)
                state.discounted_price=state.discounted_price+parseFloat(item.discounted_price);
                return {...state}
        }
        else
        {
           
                state.items.push({...item,quantity:1,
                    price:parseFloat(item.price),
                    discounted_price:parseFloat(item.discounted_price)
                });
                state.totalItems=1;
                state.totalPrice=parseFloat(item.price)
                state.discounted_price=parseFloat(item.discounted_price)
               return {...state}
        }
        return state;
    }
    else if (action.type==types.eremoveCartItem)
    {
        let cartItem=_.find(state.items,x=>x.id==action.payload.id);
        let item=action.payload;

        if(cartItem)
        {
            
            if(cartItem.quantity==1)
            {   
                state.items= state.items.filter(x=>x.id!=item.id)
                state.totalItems=state.totalItems-1;
                state.totalPrice=state.totalPrice-parseFloat(item.price)
                state.discounted_price=state.discounted_price-parseFloat(item.discounted_price);
                return {...state}
            }
            else
            {
                   
            cartItem.quantity-=1;
            cartItem.price=cartItem.quantity*parseFloat(item.price);
            cartItem.discounted_price=cartItem.quantity*parseFloat(item.discounted_price);
                //state.totalItems=state.totalItems+1;
                state.totalPrice=state.totalPrice-parseFloat(item.price)
                state.discounted_price=state.discounted_price-parseFloat(item.discounted_price);
                return {...state}
            }
                  }
        
        return state;

    }
    else if (action.type==types.eremoveSingleCartItem)
    {
        let item=action.payload;
        state.items= state.items.filter(x=>x.id!=item.id)
                state.totalItems=state.totalItems-1;
                state.totalPrice=state.totalPrice-parseFloat(item.price)
                state.discounted_price=state.discounted_price-parseFloat(item.discounted_price);
                return {...state}
        

    }
    else if(action.type==types.eemptyCart)
    {
        return mainCartEmpty;
    }
    return state;
}
