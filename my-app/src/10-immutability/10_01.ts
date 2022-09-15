export type UserType = {
    name: string
    hair: number
    address: { title: string }

}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string){
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithBooksType & UserWithLaptopType,book: string){
    return {
        ...u,
        books: [
            ...u.books,
            book
        ]
    }
}

export function (u: UserWithBooksType & UserWithLaptopType,book: string, updateBook: string){
    return {
        ...u,
        books: [
            ...u.books,
            books
        ]
    }
}

// 58