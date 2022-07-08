/* exported getStudentNames */
// function getStudentNames(students)
// goal: return a new array containing only the name of each student object
// would have to create a new variable for an empty array to store data
// access the name property of each object and push that value into the new array
// return the new array

function getStudentNames(students) {
  var array = [];
  for (var i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}
