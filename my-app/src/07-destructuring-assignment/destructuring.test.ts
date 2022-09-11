
import {ManType} from "./Destructuring";
import exp from "constants";

let props: ManType;

beforeEach(()=>{
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    }
})

test('', ()=>{



const {age, lessons} = props;
const {title} = props.address.street

    expect(title).toBe('Nezavisimosti')
    expect(lessons.length).toBe(3)


})

test('', ()=>{

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [,, ls3] = props.lessons;

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
    expect(ls3.title).toBe('3')
    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
    expect(restLessons[0]).toStrictEqual({title: '2'})
})