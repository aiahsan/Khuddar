import types from '../actions/types'
let MartItems=[];
export const martItems = (state = MartItems , action) => {

    switch(action.type)
    {
        
        case types.All_Mart_Items:{
            MartItems=[...action.payload]
            return MartItems;
        }

        default: {
            return state;
        }
    }
    return state;
}
