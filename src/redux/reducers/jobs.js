import types from '../actions/types'
let JobsItems=[];
export const jobsItems = (state = JobsItems , action) => {

    switch(action.type)
    {
        
        case types.All_JobsItems_Items:{
            JobsItems=[...action.payload]
            return [...JobsItems];
        }

        default: {
            return state;
        }
    }
    return state;
}
