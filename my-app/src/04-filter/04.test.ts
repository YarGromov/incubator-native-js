test('should take old mans older then 90', ()=>  {
    const age = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = age.filter(predicate);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses cheaper $160', ()=>  {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]



    const cheapCourse = courses.filter(course => course.price < 160)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].price).toBe(110)
    expect(cheapCourse[1].title).toBe('REACT')

})

test('get only completed tasks', ()=> {
    let tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})