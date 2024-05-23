export const getCache =(key)=>{
    return JSON.parse(localStorage.getItem(key));
}

export const setCache =(key, data)=>{
    localStorage.setItem(key, data);
}

export const deleteCache =(key)=>{
    localStorage.removeItem(key);
}