function ExampleConstructor() {

}

console.log('the value prototype property:', ExampleConstructor.prototype);
console.log('the typeof prototype property:', typeof ExampleConstructor.prototype);

var test = new ExampleConstructor();

console.log('test object value', test);
console.log('test instance of ExampleConstructor:', test instanceof ExampleConstructor);

var testInstanceOfExampleConstructor = test instanceof ExampleConstructor;
console.log(testInstanceOfExampleConstructor);
