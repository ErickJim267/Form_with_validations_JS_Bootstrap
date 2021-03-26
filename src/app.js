import "bootstrap";
import "./style.css";

window.onload = function() {};

let form = document.getElementById("miFormulario");

form.addEventListener(
  "submit",
  function(event) {
    event.preventDefault();
    event.stopPropagation();
    let comodin = true,
      input = this.elements,
      total = input.length;

    for (let i = 0; i < total; i++) {
      if (!input[i].value.length) {
        alert("Alerta! Por favor revise sus respuestas");
        input[i].focus();
        comodin = false;
        break;
      }
    }

    if (comodin) {
      this.submit();
    }
  },
  false
);
