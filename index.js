// Bahar's Coffee Assistant

// ---------- Part 1: Login ----------
let username = prompt("Enter username (admin or user):");
let password = prompt("Enter password:");

if (!((username === "admin" || username === "user") && password === "1234")) {
    alert("Access Denied! Incorrect username or password.");
    throw new Error("Program stopped due to wrong credentials.");
}

alert("Welcome to Bahar's Coffee!");

// ---------- Part 2: Show Coffee Menu ----------
alert(
    "Bahar's Coffee Menu:\n" +
    "1. Espresso - $2.50\n" +
    "2. Latte - $3.50\n" +
    "3. Cappuccino - $4.00"
);

// ---------- Part 3: Take Order ----------
let customerName = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let coffeeType = prompt("Which coffee do you want? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups?"));

let pricePerCup = 0;
if (coffeeType === "espresso") pricePerCup = 2.5;
else if (coffeeType === "latte") pricePerCup = 3.5;
else if (coffeeType === "cappuccino") pricePerCup = 4.0;
else {
    alert("Invalid coffee type! Program stopped.");
    throw new Error("Invalid coffee type.");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

// Apply discount if age < 18 or > 60
if (age < 18 || age > 60) discount = originalTotal * 0.10;

let finalTotal = originalTotal - discount;

// ---------- Part 4: Bill Splitter with Tip ----------
let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
if (![1, 2, 3].includes(people)) {
    alert("Invalid number of people! Program stopped.");
    throw new Error("Invalid number of people.");
}

let tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
if (![0, 5, 10, 15].includes(tipPercentage)) {
    alert("Invalid tip percentage! Program stopped.");
    throw new Error("Invalid tip percentage.");
}

let tipAmount = (finalTotal * tipPercentage) / 100;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / people;

// ---------- Final Output ----------
alert(
    `Hello ${customerName}!\n` +
    `You ordered ${quantity} ${coffeeType}(s).\n` +
    `Original total: $${originalTotal.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Tip: $${tipAmount.toFixed(2)}\n` +
    `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
    `Split between ${people} person(s): $${amountPerPerson.toFixed(2)} each`
);