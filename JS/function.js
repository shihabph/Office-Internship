function xyz(a, b) {
	return a**b;
}
document.getElementById("demo").innerHTML = xyz(2, 11);

// function getVal() {
// 	const val = document.querySelector('submit').value;
// 	console.log(val);
// }

function toCelsius(f) {
  return [(5/9) * (f-32)];
}
document.getElementById("demo2").innerHTML = toCelsius(100);

// This Object

const person = {
	firstName: "John",
	lastName: "Doe",
	id: 1631,
};

	// function fname() {
	// 	return person.firstName + " " + person.lastName;
	// }

// Display some data from the object:
document.getElementById("demo3").innerHTML = person.firstName+ " " + person.lastName;