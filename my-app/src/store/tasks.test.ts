import {ActionType, div, mult, salaryReducer, StateType, sub, sum} from "./tasks";

test('sum', () => {
   const salary: number = 1000
    const action: ActionType = {
       type: "SUM",
        n: 500
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(1500)

})

test('sub', () => {
    const salary = 1000;
    const action: ActionType = {
        type: "SUB",
        n: 200
    }
    const result = salaryReducer(salary, action);
    expect(result).toBe(800)
})
test('div', () => {
    const salary: number = 1000;
    const action: ActionType ={
        type: "DIV",
        n: 2
    }
    const result = salaryReducer(salary,action)
    expect(result).toBe(500)
})
test('mult', () => {
    const salary: number = 1000;
    const action: ActionType = {
        type: "MULT",
        n: 2.5
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(2500)
})
test('case SUM of salaryReducer', () => {
    const salary: StateType = 800;
    const action: ActionType = {
        type: "SUM",
        n: 200
    };

    const testAction: ActionType = {
        type: "TEST",
        n: 200
    }
    const result = salaryReducer(salary, action);

    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(salary)
})