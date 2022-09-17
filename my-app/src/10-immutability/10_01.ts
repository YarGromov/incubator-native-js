import {Simulate} from "react-dom/test-utils";


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

export type WithCompanyType = {
    companies: Array<{id: number, title: string}>
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

export function updateBook(u: UserWithBooksType & UserWithLaptopType,oldBook: string, newBook: string){
    return {
        ...u,
        books: u.books.map(b=> b === oldBook? newBook: b)
    }
}

export function removeBook(u: UserWithBooksType & UserWithLaptopType, bookForDelete: string){
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export const updateCompanyTitle = (user: WithCompanyType,companyID: number, companyTitle: string) => {
    const copy: WithCompanyType = {
        ...user,
        companies: user.companies.map(c => c.id === companyID
        ? {...c, title: companyTitle}
        : c)
    }
    return copy
}