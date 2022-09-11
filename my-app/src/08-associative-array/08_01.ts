export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1234501': {id: 1234501, name: 'Natasha'},
    '1025431': {id: 1025431, name: 'Valera'},
    '155401': {id: 155401, name: 'Katya'}
}

let user = {id: 100500, name: 'Igor'}

users[user.id] = user;

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1234501, name: 'Natasha'},
    {id: 1025431, name: 'Valera'},
    {id: 155401, name: 'Katya'}
]

usersArray.find(u => u.id === 155401);