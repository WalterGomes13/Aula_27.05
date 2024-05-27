document.addEventListener("DOMContentLoaded", () => {
  const newNotaInput = document.getElementById("nota-input");
  const newNotaBtn = document.getElementById("add-button");
  const media = document.getElementById("media-lista");
  const calcularNota = document.getElementById("calculate-button");
  const listaNotas = document.getElementById("notas-lista");

  const addNota = () => {
    const notaText = parseFloat(newNotaInput.value);

    if (newNotaInput.value != "" && notaText <= 10) {
      const li = document.createElement("li");

      li.innerHTML = `<span>${notaText}</span> <button class='delete-btn'>Delete</button>`;

      listaNotas.appendChild(li);

      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      newNotaInput.value = "";
    } else {
      alert("Por favor, insira um número de 0 a 10");

      newNotaInput.value = "";
    }
  };
  newNotaBtn.addEventListener("click", addNota);

  const calcMedia = () => {
    media = somaNota / (listaNotas.lenght);
    if (media != "") {
      const li2 = document.createElement("li");
      li2.innerHTML = `<span>${media}</span>`;

      media.appendChild(li2);

      li2.addEventListener("click", () => {
        li2.classList.toggle("completed");
      });
    }
  };

  calcularNota.addEventListener("click", calcMedia);

  newNotaInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      addNota();
    }
  });
});
