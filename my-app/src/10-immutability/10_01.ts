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

export type UserWithSkillsType = UserType & {
    skills: Array<number>
}

export type CompaniesType = {
    companies: Array<{id: number, title: string}>
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
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== removedBook)
    }
}


export function updateSkills(u: UserWithLaptopType & UserWithBooksType & UserWithSkillsType, oldSkill: number, newSkill: number) {
   return {
       ...u,
       skills: u.skills.map(s => s === oldSkill ? newSkill : s)
   }
}

export function updateCopmanies(u: CompaniesType, newCopmanies: {id: number, title: string}){
    return {
        ...u,
        companies: [...u.companies, newCopmanies]
    }
}

export function updateCopmanyTitle(u: CompaniesType, companyID: number, newTitle: string){
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyID ? {...c, title: newTitle} : c)
    } as CompaniesType
}

export const updateCopmanyTitle2 = (companies: {[key: string]: Array<{id: number, title: string}>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string
                                    ) => {
    let companyCopy = {...companies};
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
    ? {...c, title: newTitle} : c
    )
    return companyCopy
}



// let man4FullCopy = {
//     ...man4,
//     mother: {...man4.mother, work: {
//             ...man4.mother.work
//         }}
// }

