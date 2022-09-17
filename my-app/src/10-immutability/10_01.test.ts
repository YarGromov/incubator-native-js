import {
    addNewBooksToUser,
    makeHairstyle, removeBook,
    updateBook,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";




test('reference type test', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        }

    }
    const awesomeUser = makeHairstyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('upgrade laptop to Macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const userCopy  = upgradeUserLaptop(user,  "Mackbook");

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Mackbook')
    expect(user.laptop.title).toBe('Zenbook')

})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }
    const userCopy  = addNewBooksToUser(user,  'ts');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    // expect(userCopy.books[5]).toBe('rest api')

})

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }
    const userCopy  = updateBook(user, 'js',  'ts');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }
    const userCopy  = removeBook(user, 'js');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})