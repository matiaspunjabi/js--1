// Changing html label from Javascript

const h1 = document.querySelector(".list__h1");

// h1.innerText = "go to show input text from console ";

// adding on the html "sections" we create on JS with the input text

const form = document.querySelector(".list__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector(".list__input");
    const div = document.querySelector(".todolist__container");
    const section = document.createElement("p");

    section.innerText = `${input.value}`;

    div.appendChild(section);
    form.reset();
})

