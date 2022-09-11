


test('', ()=>{
let man = {
    name: 'Dimych',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
        street: {
            title: 'Nezavisimosti'
        }
    }
}

const {age, lessons} = man;
const {title} = man.address.street

    expect(title).toBe('Nezavisimosti')
    expect(lessons.length).toBe(2)

})