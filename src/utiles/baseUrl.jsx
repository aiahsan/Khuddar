import { create } from 'apisauce'
export const api = create({
    baseURL: 'https://webzards.com/khuddar/api/',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
  });
  export const urlImg="https://webzards.com/get_deals/images";
