let user = {
    name: 'Dimych',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}

let userTitle1 = user.address.city.title //Minsk
let userTitle2 = user['address']['city']['title'] //Minsk


let users = ["Natasha", "Natasha1", "Natasha2", "Natasha3", "Natasha4"];
users['map']((el) => el.toUpperCase())
users.map((el) => el.toLowerCase())

let usersObj: any = {
    '0': 'Natasha',
    '1': 'Vadim',
    '2': 'Kolya',
    '3': 'Sveta'
}
usersObj['0'] ;// Natasha

usersObj["привет как дела"] = 'хорошо';

Object.keys(usersObj) // ['0', '1', '2', '3', 'привет как дела']

Object.values(usersObj) // ['Natasha', 'Vadim', 'Kolya', 'Sveta', 'хорошо']