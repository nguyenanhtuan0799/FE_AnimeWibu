export const setStorage = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}


export const removeStorage = (key) =>{
    localStorage.removeItem(key);
}

export const getStorage = (key) => {
   return JSON.parse(localStorage.getItem(key));
}