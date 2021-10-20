import types from '../actions/types'
let News=[];
export const news = (state = News , action) => {

    switch(action.type)
    {
        
        case types.All_News:{
            News=[...action.payload]
            return [...News];
        }

        default: {
            return state;
        }
    }
    return state;
}
