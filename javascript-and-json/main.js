var books = [
  {
    isbn: '1234-1234',
    title: 'book1',
    author: 'alvin'
  },
  {
    isbn: '1234-1235',
    title: 'book2',
    author: 'bert'
  },
  {
    isbn: '1234-1236',
    title: 'book3',
    author: 'elly'
  }
];
console.log('Array type:', typeof books, 'The value of Array:', books);

JSON.stringify(books);
console.log('the value of stringify:', (JSON.stringify(books)), 'The type is:', typeof JSON.stringify(books));

var student = '{"ID": "12345678", "Name": "Alvin" }';

var objStudent = JSON.parse(student);

console.log('the value of  objStudent:', objStudent, 'The type of objStudent', typeof objStudent);
