import {
    addNewBooksToUser,
    CompaniesType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    updateCopmanies,
    updateCopmanyTitle,
    updateCopmanyTitle2,
    updateSkills,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    UserWithSkillsType
} from "./10_01";



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

test(' ', () => {
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

test('update companies', () => {
    let user: UserWithLaptopType & UserWithBooksType & CompaniesType = {
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
        companies: [{id: 1, title: 'epam'}, {id: 2, title: 'IT-INCUBATOR'}]

    }
    const userCopy = updateCopmanies(user, {id: 3, title: 'IsSoft'});

    expect(user).not.toBe(userCopy)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].id).toBe(3)
})

test('update company title', () => {
    let user: UserWithLaptopType & UserWithBooksType & CompaniesType = {
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
        companies: [{id: 1, title: 'епам'}, {id: 2, title: 'IT-INCUBATOR'}]

    }
    const userCopy = updateCopmanyTitle(user, 1, 'EPAM');

    expect(user).not.toBe(userCopy)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {
    let companies = {
        "Dimych": [{id: 1, title: 'епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        "Artem": [{id: 2, title: 'IT-INCUBATOR'}]
    }

    let copyCompany = updateCopmanyTitle2(companies, "Dimych", 1, 'EPAM')

    expect(copyCompany["Dimych"][0].title).toBe('EPAM')

})









