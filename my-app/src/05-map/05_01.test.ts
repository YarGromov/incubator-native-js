import {createGreetingMessage, ManType} from "./05_01";


let people: Array<ManType> = [];

beforeEach( ()=> {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
} )

test('should get array of greeting messages', ()=> {
    const message = createGreetingMessage(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe( 'Hello Andrew. Welcome to IT-Incubator')
    expect(message[1]).toBe( 'Hello Alex. Welcome to IT-Incubator')
    expect(message[2]).toBe( 'Hello Dmitry. Welcome to IT-Incubator')
})