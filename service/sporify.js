import axios from "axios";

const token="BQBDjqBcNDYGhHFmbLMJVi2_52uPb8WAZyF_ggAj0r58O8xi817R23EViI7nrQmmtD-8E7BkoyLNGYn0Zqtyyod2uuYda5JO-qWg0nxXfScDidd7iIqa-6wizjZ1RLsWnruYt9JHERcV3mSKyQPZzfyqSAIOL1qKa_oXGVk"
const instanse=axios.create({
        baseURL:"https://api.spotify.com/v1/",
        headers:{ Authorization:'Bearer ' + token}})

export async function recomendation  (){
    const  data  = await instanse.get("/recommendations/available-genre-seeds")
        console.log('fkdjgkfjdg');
    return data;}
  

export async function favoriteSong  (){
    const  data  = await instanse.get("/tracks/6rqhFgbbKwnb9MLmUQDhG6")
     
    return data;}
  
