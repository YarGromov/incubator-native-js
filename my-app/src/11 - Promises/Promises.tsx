import React from 'react';

export const Promises = () => {


    function getNumber() {
        // return Promise.resolve(Math.random())

        const promise = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(Math.random())
            },2000)
        })

        return promise
    }

    getNumber().then(n => console.log(n + ' - random number'))
    // getNumber().then(n => console.log(n + ' - random number'))


    return (
        <div>
            1
        </div>
    );
};



