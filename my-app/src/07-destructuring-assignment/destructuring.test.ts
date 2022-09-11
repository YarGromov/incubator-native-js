
import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(()=>{
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
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
    expect(lessons.length).toBe(2)


})