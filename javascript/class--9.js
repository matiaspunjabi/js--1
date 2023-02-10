/* --Changing html label from Javascript-- */

// const h1 = document.querySelector(".list__h1");

// h1.innerText = "go to show input text from console ";

/* --Adding on the html "sections" created on JS with the input text-- */

// const form = document.querySelector(".list__form");
// const input = document.querySelector(".list__input");
// const div = document.querySelector(".todolist__container");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const section = document.createElement("p");

//     section.innerText = `${input.value}`;

//     div.appendChild(section);
//     form.reset();
// })

class Products {
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

const nuts = new Products("nuts", 200, 100);
// const peanuts = new Products("peanuts", 120, 100);
// const almonds = new Products("almonds", 250, 100);
// const chestnuts = new Products("chestnuts", 350, 100);

const arrayProducts = [nuts];

const container = document.querySelector(".container");

arrayProducts.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `   <form class="product__form" action="">
                            <label for="${product.name}">${product.name} $${product.price}/100gr</label>
                            <input class="product__input" type="text" id="${product.name}">
                            <button>add</button>
                        </form>`;
    container.appendChild(div);
    
}); 

const form = document.querySelector(".product__form");
const input = document.querySelector(".product__input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const amountProduct = input.value*arrayProducts.price;
    const sectionTotal = document.createElement("p");
    sectionTotal.innerText = `$${amountProduct}`;
    container.appendChild(sectionTotal);
    form.reset();
}); 














