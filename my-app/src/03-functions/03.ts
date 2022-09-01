import {student, StudentType} from "../02-object/02";


export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: 'JS'
    })
}

export function makeStudentActive(stud: StudentType) {
    stud.isActive = true;
}

export function isLive(st: StudentType, city: string){
    st.address.city.title = city
}