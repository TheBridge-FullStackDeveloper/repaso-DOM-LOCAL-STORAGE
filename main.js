const email = document.getElementById("email");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

const printEmail = () => {
  const savedEmail = localStorage.getItem("email");
  text.innerHTML = `Correo: ${savedEmail}`;
};
const saveEmail = (e) => {
  e.preventDefault();
  console.log(email.value);
  localStorage.setItem("email", email.value);
  printEmail();
};
printEmail();

// el boton
btn.addEventListener("click", saveEmail);

//Formulario nota 2
const title = document.getElementById("title");
const content = document.getElementById("content");
const submit = document.getElementById("submit");
const noteText = document.getElementById("noteText");

const printNote = () => {
  const savedNote = JSON.parse(localStorage.getItem("Note"));
  noteText.innerHTML = `<h3>${savedNote.title}</h3>
    <p> Content:${savedNote.content}</p>
    `;
};
const saveNote = (e) => {
  e.preventDefault();
  const note = {
    title: title.value,
    content: content.value,
  };
  localStorage.setItem("Note", JSON.stringify(note));
  console.log(title.value, content.value);
  printNote();
};
printNote();
submit.addEventListener("click", saveNote);

//*Pintar DOM
const personas = [
  {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  },
  {
    nombre: "María",
    edad: 30,
    ciudad: "Barcelona",
  },
  {
    nombre: "Euralio",
    edad: 40,
    ciudad: "Sevilla",
  },
  {
    nombre: "Laura",
    edad: 35,
    ciudad: "Valencia",
  },
];
//   Muestra en el HTML el nombre, la edad y la ciudad de Euralio.

const textEuralio = document.getElementById("textEuralio");
textEuralio.innerHTML = `Nombre: ${personas[2].nombre}, edad: ${personas[2].edad} y ciudad: ${personas[2].ciudad}`;
console.log(personas[2]);
// Ahora muestra el nombre y edad de todas las personas en el HTML.
const textPeople = document.getElementById("textPeople");
personas.forEach((persona) => {
  textPeople.innerHTML += `Nombre: ${persona.nombre}, Edad: ${persona.edad} <br>`;
});

// Ahora muestra el nombre, la edad y la ciudad de las personas mayores de 30.
const textPeople30 = document.getElementById("textPeople30");

const people30 = personas.filter((persona) => persona.edad > 30);
people30.forEach(persona =>textPeople30.innerHTML +=`Nombre: ${persona.nombre}, Edad: ${persona.edad} y Ciudad: ${persona.ciudad} <br>`)
