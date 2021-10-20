import types from '../actions/types'
let FamilyMembers=[];
let FamilyServices={};
export const familyMembers = (state = FamilyMembers , action) => {

    switch(action.type)
    {
        
        case types.Add_familyMember:{
            FamilyMembers=[action.payload,...state]
            return FamilyMembers;
        }

        case types.All_members:{

            FamilyMembers=[...action.payload];
            return FamilyMembers; 
        }

        default: {
            return state;
        }
    }
    return state;
}

export const services=(state=FamilyServices,action)=>{
    switch(action.type)
    {

        case types.GetAllService:{
            console.log(action.payload,"u9sdus")
        return action.payload;
        }
    
        default :{
            return state;
        }
    }


    
}