let user = {
    name: 'Dimych',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}

let userTitle1=  user.address.city.title
let userTitle2 = user['address']['city']['title']

