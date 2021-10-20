import Types from './types'
export const get_News=(data)=>{
    return { type: Types.All_News, payload: data }    
}
