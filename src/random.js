import React from 'react';

axios.get(url,params)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err); 
})