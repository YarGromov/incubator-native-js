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

    const cheapPredicate = (course: CoursePropsType) => {
        return course.price < 160
    }

    const cheapCourse = courses.filter(cheapPredicate)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].price).toBe(110)

})