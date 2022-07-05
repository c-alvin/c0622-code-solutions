var student = {
  firstName: 'Alvin',
  lastName: 'Cho',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('The value of:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Accountant';

console.log('The value of student.livesInIrvine:', student.livesInIrvine);
console.log('The value of previousOccupation:', student.previousOccupation);
console.log('The value of student:', student);

var vehicle = {
  make: 'Nissan',
  model: 'GT-R',
  year: '2019'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('The value of vehicle[color]:', vehicle['color']);
console.log('The value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('The Value of vehicle:', vehicle);

var pet = {
  name: 'Happy',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('The value of pet:', pet);
