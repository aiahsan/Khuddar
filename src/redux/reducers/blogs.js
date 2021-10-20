import types from '../actions/types'
let MartItems=[];
export const blogs = (state = MartItems , action) => {

    switch(action.type)
    {
        
        case types.All_Blog_Items:{
            MartItems=[...action.payload]
            return MartItems;
        }

        default: {
            return state;
        }
    }
    return state;
}
