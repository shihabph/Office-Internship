
// Type of console
console.log("String");
console.log(25 - 97);
console.log([1, 2, 6, 54, 99]);
console.log({ Shihab: 'this', marks: 34 });
console.table({ Shihab: 'this', marks: 34 });
console.assert(17 < 18, "True fact");




					// Testing(Premetive Data Type)
// String
let name = "Shihab";
console.log("My Name is " + name);
console.log("Data Type is: " + (typeof name));

// Number
let num = 53;
console.log("Data Type is: " + (typeof num));

// Boolean
let isDriver = true;
console.log("Data Type is: " + (typeof isDriver));

// Null
let nulVar = null;
console.log("Data Type is: " + (typeof nulVar));

					// Testing(Reference Data Type)
// Array
let newArr = [1, 2, 3, 4, 'shihab', null, true];
console.log(typeof newArr);

// Object Literals
let sMarks = {
	Shihab: 91,
	Hasan: 75,
	Mehedi:50
}
console.log(typeof sMarks);
function findName() {
	sMarks;
}
console.log(typeof findName);
console.log(sMarks);

// Date
let dateT =new Date();
console.log(typeof dateT);
