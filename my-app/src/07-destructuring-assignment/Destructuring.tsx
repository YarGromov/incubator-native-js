import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type DestructuringPropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const Destructuring: React.FC<DestructuringPropsType> = ({title, man, ...props}) => {


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    );
};

