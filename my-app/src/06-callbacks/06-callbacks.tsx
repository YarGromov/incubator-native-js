import React from "react";


// const callback = () => {
//     alert('Hey')
// }
//
// window.setTimeout(callback, 1000);

export const User = () => {

    const userDelete = () => {
        alert('User has been deleted')
    }
    const userSave = () => {
        alert('User has been saved')
    }


    return (
        <div> Dimych
        <button onClick={userDelete}>delete</button>
        <button onClick={userSave}>save</button>

        </div>
    )

}