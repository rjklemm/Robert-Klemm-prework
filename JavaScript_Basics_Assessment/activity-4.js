var students = ['Alice','Bill','Cathy'];
for (let i=0; i < 3; i++) {
    var student = prompt('Add another name: ');
    students.push(student);
}
j = 0;
while (j < students.length) {
    console.log(students[j]);
    j++;
}