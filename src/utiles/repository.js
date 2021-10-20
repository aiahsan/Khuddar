import {api} from './baseUrl';
import {headers,store} from '../utiles/reduxConfig/persistConfig'


const storemain= store.getState();
// let Authheader={ headers:headers}
const login =async (data)=>{

   return await api.post('/login',data) 
}
const member_login =async (data)=>{

   return await api.post('member/login',data) 
}
const member_login2 =async (data)=>{

   return await api.post('member/login2',data) 
}
const register =async (data)=>{
   return await api.post('/register',data) 
}
const add_family_member =async (data,Authheader)=>{
   return await api.post('member/create',data,Authheader) 
}
const list_family_member =async (Authheader)=>{

   return await api.get('member/list',{},Authheader) 
}
const my_services =async (Authheader)=>{
   return await api.get('my_services',{},Authheader) 
}
const mart_products =async (Authheader)=>{

   return await api.get('products/list',{},Authheader) 
}
const emart_products =async (Authheader)=>{

   return await api.get('ecommerce/products/list',{},Authheader) 
}
const jobs =async (Authheader)=>{
 
   return await api.get('jobs/list',{},Authheader) 
}
const videos =async (Authheader)=>{
 
   return await api.get('videos',{},Authheader) 
}
const jobs_Apply =async (data,Authheader)=>{
 
   return await api.post('jobs/apply',data,Authheader) 
}
const nikkah_add =async (data,Authheader)=>{
   return await api.post('service_nikkah/add',data,Authheader) 
}
const nikkah_add_main =async (data,Authheader)=>{
   return await api.post('nikkahadd',data,Authheader) 
}
const baraat_add =async (data,Authheader)=>{
   return await api.post('baraat/add',data,Authheader) 
}
const food_add =async (data,Authheader)=>{
   return await api.post('food/add',data,Authheader) 
}
const saloon_add=async (data,Authheader)=>{
   return await api.post('saloon/add',data,Authheader) 
}
const valima_add=async (data,Authheader)=>{
   return await api.post('valima/add',data,Authheader) 
}
const wedding_add=async (data,Authheader)=>{
   return await api.post('wedding_location/add',data,Authheader) 
}
const rentacar_add=async (data,Authheader)=>{
   return await api.post('rentacar/add',data,Authheader) 
}
const funeral =async (data,Authheader)=>{
   return await api.post('funeral/add',data,Authheader) 
}
const OPD =async (data,Authheader)=>{
   return await api.post('opd/add',data,Authheader) 
}
const quiz_submit =async (data,Authheader)=>{
   return await api.post('quiz/submit',data,Authheader) 
}
const mart_order=async (data,Authheader)=>{
   return await api.post('mart/order',data,Authheader) 
}
const emart_order=async (data,Authheader)=>{
   return await api.post('ecommerce/order',data,Authheader) 
}
const business_add =async (data,Authheader)=>{
   return await api.post('business/add',data,Authheader) 
}
const quiz =async (Authheader)=>{
   
   return await api.get('quiz',{},Authheader) 
}
const quiz_play =async (Authheader)=>{
   
   return await api.get('quiz/start',{},Authheader) 
}
const news_list =async (Authheader)=>{
   return await api.get('news/list',{},Authheader) 
}
const quiz_result =async (Authheader)=>{
   return await api.get('quiz/result',{},Authheader) 
}
const blogs =async (Authheader)=>{
   return await api.get('blogsWithCats',{},Authheader) 
}
const opd_categories =async (Authheader)=>{
   return await api.get('opd/categories',{},Authheader) 
}
const my_tests=async (Authheader)=>{
   return await api.get('my_tests',{},Authheader) 
}
const getservices=async (category,Authheader)=>
{
   return await api.get('services/'+category,{},Authheader) 

}
const toll_free_number=async (Authheader)=>
{
   return await api.get('toll_free_number',{},Authheader) 

}
const postservices=async (category,Authheader)=>
{
   
   return await api.post('service/selected',category,Authheader) 

}
const getpostservices=async (category,Authheader)=>
{
   return await api.post('service/selected',category,Authheader) 

}
const notifications_list=async (Authheader)=>
{
   return await api.get('notifications/list',{},Authheader) 

}
export const repository= {
   login,
    register,
    add_family_member,
    list_family_member,
    nikkah_add,
    my_services,
    mart_products,
    emart_products,
    funeral,
    jobs,
    jobs_Apply,
    videos,
    quiz,business_add,news_list,
    nikkah_add_main,
    baraat_add,
    food_add,
    saloon_add,
    wedding_add,
    rentacar_add,
    valima_add,
    quiz_submit,
    quiz_play,
    OPD,
    quiz_result,
    blogs,
    mart_order,
    emart_order,
    opd_categories,
    my_tests,
    getservices,
    postservices,
    getpostservices,
    toll_free_number,
    member_login,
    member_login2,
    notifications_list
}