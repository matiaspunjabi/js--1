/* --Changing html label from Javascript-- */

// const h1 = document.querySelector(".list__h1");

// h1.innerText = "showing input text from console ";

/* --Adding on the html "sections" created on JS with the input text-- */

// const form = document.querySelector(".list__form");
// const input = document.querySelector(".list__input");
// const div = document.querySelector(".todolist__container");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const section = document.createElement("p");

// //     section.innerText = `${input.value}`;

// //     div.appendChild(section);
// //     form.reset();
// // })

class Products {
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

const nuts = new Products("nuts", 200, 100);
const peanuts = new Products("peanuts", 120, 100);
const almonds = new Products("almonds", 250, 100);
const chestnuts = new Products("chestnuts", 350, 100);

const arrayProducts = [nuts,peanuts,almonds,chestnuts];

const form = document.querySelector(".form");

arrayProducts.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `<label class="label__${product.name}">${product.name} $${product.price}/100</label>
                    <input class="input__${product.name} type="number""></input>`
    form.appendChild(div);

    const inputNuts = document.querySelector(".input__nuts");
    const inputPeanuts = document.querySelector(".input__peanuts");
    const inputAlmonds = document.querySelector(".input__almonds");
    const inputChestnuts = document.querySelector(".input__chestnuts");
    

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const finalPriceNuts = inputNuts.value * 200/100;
        const finalPricePeanuts = inputPeanuts.value * 120/100;
        const finalPriceAlmonds = inputAlmonds.value * 250/100;
        const finalPriceChestnus = inputChestnuts.value * 350/100;
        const finalTotal = finalPriceNuts + finalPricePeanuts + finalPriceAlmonds + finalPriceChestnus;
        const section = document.createElement("span");
        section.innerText = `Your purchase is: $${finalTotal}`;
        form.appendChild(section);
        form.reset();
    })
})










                    




