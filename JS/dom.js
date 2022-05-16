function validateForm() {
  let x = document.forms["Main-form"]["fullName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
	}
	let y = document.forms["Main-form"]["email"].value;
	if (y == "") {
		alert("Email Must be included");
		return false;
	}
	let z = document.forms["Main-form"]["phone"].value;
	if (z== "") {
		alert("Phone must be included");
		return false;
	}
};


// ************** Declaring a CLASS ****************
class Product {
	constructor(ItemName, price, Discount, P_code) {
		this.ItemName = ItemName;
		this.price = price;
		this.Discount = Discount;
		this.P_code = P_code;
	}
}
// Class Call
let Pencil = new Product('Apsara', 17, 3, 'P231');


// Nesting a class inside of an Object
const Product1= class Product {
	constructor(ItemName, price, Discount, P_code) {
		this.ItemName = ItemName;
		this.price = price;
		this.Discount = Discount;
		this.P_code = P_code;
	}
}
let chair = new Product1('Partex', 7950, 450, 'C0345LB');
	