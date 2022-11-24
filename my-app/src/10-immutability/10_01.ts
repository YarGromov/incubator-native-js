export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType &  {
    books: Array<string>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city,
            house: 10
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }

    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, mackbook: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: mackbook
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
       books: [...u.books, ...newBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
      ...u,
        books: u.books.map(b => b === oldBook ? b = newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== removedBook)
    }
}















