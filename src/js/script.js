let user = {
    name: 'Bob',
    age: 12,
    isStudent: true,
    friends: ['Lora', 'Dora', 'Nora']
}

let user2 = {...user, isMarried: true, name: 'Lol'};

user.friends.push('Alex');
let deepCopy = {...user, friends: [...user.friends, 'Helge']};
console.log(deepCopy);


const student = [
    {name: 'Bod'},
    {name: 'Gop'},
    {name: 'Blob'},
    {name: 'Gleb'},
]

const student2 = student.map(st => st.name === 'Gleb' ? {...st, name: 'Joe'} : st);
console.log(student2)

const arr = [1, 2, 3];
const [a,b,c] = arr;
console.log(a, b, c)

