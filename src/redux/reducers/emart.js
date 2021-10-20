import types from '../actions/types'
let eMartItems=[];
export const emartItems = (state = eMartItems , action) => {

    switch(action.type)
    {
        
        case types.eAll_Mart_Items:{
            eMartItems=[...action.payload]
            return eMartItems;
        }

        default: {
            return state;
        }
    }
    return state;
}
