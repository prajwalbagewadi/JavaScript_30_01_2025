//Objects: An object is a collection of key-value pairs, where the keys are properties and the values are the corresponding data.

//declaring object
let obj1 = {
  name: "abc",
  age: 26,
  job: "developer",
};
console.log("obj1=", obj1);

let obj2 = new Object();
obj2.name = "john";
(obj2.age = 29), (obj2.job = "developer");
console.log("obj2=", obj2);

//accessing object properties
console.log("name=", obj2.name);
console.log("name=", obj2["name"]);

//modifying properties
obj2.age = 30;
console.log("age=", obj2["age"]);

//add properties
obj2.exp = 9;
console.log("obj2=", obj2);

//delete properties
delete obj2.exp;
console.log("obj2=", obj2);

//checking if properties
console.log("in=", "age" in obj2);
console.log("obj.hasOwnProperty=", obj2.hasOwnProperty("age"));

//iterating over obj
//for in
for (key in obj1) {
  console.log("key=", key, " ", "val=", obj1[key]);
}

//property extraction
console.log("Object.keys=", Object.keys(obj1));
console.log("Object.values=", Object.values(obj1));
console.log("Object.entries=", Object.entries(obj1));

Object.keys(obj1).forEach((key) =>
  console.log("key=", key, " ", "val=", obj1[key])
);

//merging objects.
let product1 = { name: "pineapple" };
let product2 = { wt: 300 };
let product3 = { ...product1, ...product2 };
console.log("product3=", product3);

//object length
console.log("len=", Object.keys(product3).length);

//object methods.
let product4 = {
  name: "cherry",
  wt: "500gm",
  display: () => {
    console.log("name:", this.name, " wt=", this.wt);
  },
};

/*Q)
Scenario:

You are tasked with creating an Inventory Management System for a grocery store. The store tracks grocery products, and each product has properties like name, quantity, price, and category. The categories include "Fruits", "Vegetables", "Dairy", "Bakery", etc. The store manager needs to perform tasks such as adding new items, updating quantities when stock changes, removing products, and calculating the total inventory value.

Requirements:
Create an object for each product with the following properties:

name: The name of the grocery product (e.g., "Apple", "Milk").
quantity: The number of items available in stock.
price: The price per unit of the product.
category: The category of the product (e.g., "Fruits", "Vegetables", "Dairy", etc.).
Write functions for:

Adding a product: The function should add a new product to the inventory or update the quantity if the product already exists.
Removing a product: The function should allow a product to be removed from the inventory using its name. If the product doesn't exist, display an error message.
Updating product quantity: This function should allow you to increase or decrease the quantity of a product. Ensure that the quantity can't go below zero.
Displaying total inventory value: Calculate and display the total value of the inventory by summing up each product’s quantity * price.

*/

//classes and objects
class Bike {
  brand;
  model;
  year;
  price;
  constructor() {
    this.brand = "Royal Enfield";
  }
  accept(m, y, p) {
    this.model = m;
    this.year = y;
    this.price = p;
  }
  display() {
    console.log("brand=", this.brand);
    console.log("model=", this.model);
    console.log("year=", this.year);
    console.log("price=", this.price);
  }
}

let bike1 = new Bike();
bike1.accept("gt650", "2024", 345000);
bike1.display();

/*Q)
Scenario-Based Question: Motorcycle Store Inventory Management
Scenario:

You are tasked with creating an Inventory Management System for a motorcycle store. The store tracks motorcycle products, and each product has properties like name, quantity, price, and category. The categories include "Cruiser", "Sportbike", "Touring", "Naked", etc. The store manager needs to perform tasks such as adding new motorcycles, updating quantities when stock changes, removing motorcycles, and calculating the total inventory value.

Your task is to implement the following:

Create a class Motorcycle with the following properties:

name: The name of the motorcycle (e.g., "Harley Davidson", "Yamaha R1").
quantity: The number of motorcycles available in stock.
price: The price per unit of the motorcycle.
category: The category of the motorcycle (e.g., "Cruiser", "Sportbike", "Touring", etc.).
Methods:

updateQuantity(change): This method should allow you to increase or decrease the quantity of the motorcycle. Ensure that the quantity can't go below zero.
displayInfo(): This method should display the motorcycle’s details, including its name, category, price, and quantity.
Create a class MotorcycleInventory to manage the store's inventory:

addMotorcycle(motorcycle): Adds a new motorcycle to the inventory or updates the quantity if the motorcycle already exists.
removeMotorcycle(name): Removes a motorcycle from the inventory using the motorcycle's name. If the motorcycle doesn’t exist, display an error message.
totalInventoryValue(): This method should calculate and display the total value of the inventory by summing up each motorcycle’s quantity * price.

*/
