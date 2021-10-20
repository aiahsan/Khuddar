import types from '../actions/types'
let OPDlist=[];
export const opd_categories = (state = OPDlist , action) => {

    switch(action.type)
    {
        
        case types.All_OPd_categories:{
            OPDlist=[...action.payload]
            return OPDlist;
        }

        default: {
            return state;
        }
    }
    return state;
}
