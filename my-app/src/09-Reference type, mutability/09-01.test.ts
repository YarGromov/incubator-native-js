type User1Type = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: User1Type) {
    u.age++
}

test('reference type test', () => {

    let user1: User1Type = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user1);

    expect(user1.age).toBe(33)

    const superman = user1;
    superman.age = 1000;

    expect(user1.age).toBe(1000)


})

test('array reference  test', () => {

    let user2 = [
        {
            name: 'Dimych',
            age: 32
        }
        ,
        {
            name: 'Dimych',
            age: 32
        },
    ]

    let admins = user2;

    admins.push({name: 'bandyfan', age: 10})

    expect(user2[2]).toEqual({name: 'bandyfan', age: 10})

})

test('value type  test', () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 101;

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)


})

test('reference type test', () => {

    let user1: User1Type = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    // let addr = user1.address

    let user2: User1Type = {
        name: 'Natasha',
        age: 30,
        address: user1.address
    }

    user2.address.title = 'Kanary'

    expect(user1.address.title).toBe('Kanary')


})