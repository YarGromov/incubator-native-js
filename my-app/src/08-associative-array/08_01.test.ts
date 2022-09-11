type UsersType = {
    [key: string]: {id: number, name: string}
}

export let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1234501': {id: 1234501, name: 'Natasha'},
    '1025431': {id: 1025431, name: 'Valera'},
    '155401': {id: 155401, name: 'Katya'}
}

beforeEach(()=>{
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1234501': {id: 1234501, name: 'Natasha'},
        '1025431': {id: 1025431, name: 'Valera'},
        '155401': {id: 155401, name: 'Katya'}
    }
})

test('should update corresponding user', ()=>{
    users['155401'].name = 'Ekaterina'

    expect(users['155401'].name).toBe('Ekaterina')
    expect(users['155401']).toEqual({id: 155401, name: 'Ekaterina'})
})