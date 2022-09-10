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

    const nameChanged = () => {
        console.log('Name changed')
    }

    const focusLostHandler = () => {
        console.log('Focus lost')
    }

    return (
        <div>
         <textarea
             onChange={nameChanged}
             onBlur={focusLostHandler}

         >Dimych</textarea>
        <button onClick={userDelete}>delete</button>
        <button onClick={userSave}>save</button>

        </div>
    )

}