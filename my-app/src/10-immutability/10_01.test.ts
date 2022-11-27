import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateSkills,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType
} from "./10_01";
import exp from "constants";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }
    const movedUser = moveUser(user, "Kiev");

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Kiev")
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.house).toBe(10)
})

test('upgrade laptop to Mackbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }
    const userCopy = upgradeUserLaptop(user, "Mackbook");

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Mackbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('move User To Other House', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = moveUserToOtherHouse(user, 13);

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(13)

})

test('move new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, ['ts', 'restApi']);

    expect(user).not.toBe(userCopy)
    expect(userCopy.books.length).toBe(6)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('restApi')
})

test('update books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove book ', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy)
    expect(userCopy.books[2]).toBe('react')
})

test('update skills to user', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithSkillsType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        skills: [1, 43, 54, 60]
    }
    const userCopy = updateSkills(user, 54, 70);

    expect(user).not.toBe(userCopy)
    expect(user.skills).not.toBe(userCopy.skills)
    expect(userCopy.skills[2]).toBe(70)
})