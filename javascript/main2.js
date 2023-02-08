class DriedFruits {
    constructor(name, price, volume, stock) {
        this.name = name;
        this.price = price;
        this.volume = volume;
        this.stock = stock;
    };
};

const nuts = new DriedFruits("nuts", 2000, 100, true);
const almond = new DriedFruits("almonds", 1500, 100, false);
const peanut = new DriedFruits("peanuts", 700, 100, true);
const chestnut = new DriedFruits("chestnuts", 1800, 100, false);

const arrayDriedFruits = [nuts, almond, peanut, chestnut];
console.log("Stock: ");
console.log(arrayDriedFruits);

function menu() {
    let options = parseInt(prompt("Choose an options to continue (only the number): \n\n 1) Check the price \n 2) Check product stock \n 3) Send a query \n 4) Make a purchase \n 5) Exit "));
    return options;
};

function checkPrice() {
    let product = prompt("Which product do you want to check? \n\n Nuts \n Almonds \n Peanuts \n Chestnuts ");
    let checkProduct = arrayDriedFruits.find(checkProduct => checkProduct.name === product);
    alert("The 100gr of " + checkProduct.name + " is " + checkProduct.price + "p.");
    console.log("The 100gr of " + checkProduct.name + " is " + checkProduct.price + "p.");
};

function checkStock() {
    let checkStock = arrayDriedFruits.filter(checkStock => checkStock.stock === true);
    for (let i = 0; i < checkStock.length; i++) {
        alert("We have in stock:\n\n" + checkStock[i].name +"\n"+ checkStock[i+1].name) ;
    };
};

function sendQuery() {
    let genre = parseInt(prompt("Please, enter your genre (only the number): \n 1. Male \n 2. Female"));
    let nameLastName = prompt("Enter a name and a last name: ");
    let phoneNumber = prompt("Enter a contact number: ");
    let email = prompt("Enter an email: ");
    let query = prompt("Write your consult and you will be answered as soon is possible: ");
    let arrayQuery = [nameLastName, phoneNumber, email, query];
    console.log(arrayQuery);
    if (genre === 1) {
        alert("¡Thank you for your query Mr. " + nameLastName + "! \n\nYou will be contacted to your phone number " + phoneNumber + " or to the mail: " + email);
    } else {
        alert("¡Thank you for your query Ms. " + nameLastName + "! \n\nYou will be contacted to your phone number " + phoneNumber + " or to the mail: " + email);
    };
};


function purchase() {
    let arrayPurchase = [];
    for (let i = 0; i < 100
        ; i++) {
        class cartProduct {
            constructor(name, price, amount) {
                this.name = name;
                this.price = price;
                this.amount = amount;
            }
        }
        let toBuy = prompt("Which product do you want to buy?\n\n Nuts \n Almonds \n Peanuts \n Chestnuts ").toLowerCase();
        let product = arrayDriedFruits.find(product => product.name === toBuy);
        let volume = parseInt(prompt("Write the amount in gr you want to buy: \n\n Example: 100gr = 100 "));
        let finalPrice = product.price * (volume / 100) * 1.21;
        let productPurchase = new cartProduct(toBuy, finalPrice, volume);
        arrayPurchase.push(productPurchase);
        let add = parseInt(prompt("Do you want to add another product to the cart? \n\n 1.yes\n 2.no"));
        if (add === 1) {
            i++;
        } else {

            break;
        }

    }
    console.log(arrayPurchase);
    let finalCart = arrayPurchase.reduce((accumulated, productPurchase) => accumulated + productPurchase.price, 0);
    alert("Your cart total is: " + finalCart + "p. \n\n ¡Thank you for your purchase!");
    console.log("Your cart total is: " + finalCart + "p. \n\n¡Thank you for your purchase!");
}

alert("Welcome to Green Store!")

for (let i = 0; i < 10; i++) {
    let options = menu();
    if (options === 1) {
        checkPrice();
    } else if (options === 2) {
        checkStock();
    } else if (options === 3) {
        sendQuery();
    } else if (options === 4) {
        purchase();
    } else if (options === 5) {
        alert("Thank you for your visit!");
        break;
    } else {
        alert("There is not an option, please try again!");
        i++;
    };
};

