import React, {ChangeEvent, MouseEvent} from "react";


// const callback = () => {
//     alert('Hey')
// }
//
// window.setTimeout(callback, 1000);

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }


    const onNameChanged = () => {
        console.log('Name changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('Focus lost')
    }



    return (
        <div>
         <textarea
             onChange={onNameChanged}
             onBlur={focusLostHandler}
         >Dimych</textarea>

            <input onChange={onAgeChanged} type={'number'}/>

        <button name='search' onClick={search}>search</button>


        </div>
    )

}