const Student = {
    age: 18,
    name: 'Ray',
};

Student.__proto__.protoProp = 'value';

for (const key in Student) {
    const value = Student[key];

    // The hasOwnProperty() method returns a boolean indicating whether
    // the object has the specified property as its own property (as opposed to inheriting it).
    if (Object.hasOwnProperty.call(Student, key)) {
        console.log('An own property: ', `${key} - ${value}`);
    } else {
        console.log('No an own property', `${key} - ${value}`);
    }
}