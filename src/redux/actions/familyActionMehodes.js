import Types from './types'
export const Add_familyMember=(data)=>{
    return { type: Types.Add_familyMember, payload: data }    
}
export const Add_All_members=(data)=>{
    return { type: Types.All_members, payload: data }    
}
export const GetAllService=(data)=>{
    return { type: Types.GetAllService, payload: data }    
}
export const Add_All_OPd_categories=(data)=>{
     return { type: Types.All_OPd_categories, payload: data }    

}