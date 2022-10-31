export const validarCampoVacio = (e) => {
  const input = e.target;
  input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
};

export function ValidarRadioSeleccionado() {
  const radioButtons = document.querySelectorAll('input[name="transaccion"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.id;
    }
  }
  return false;
}

const setError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = mensaje || `${input.name} requerido`;
  input.classList.add("inputError");
  $small.classList.add("danger");
};
const clearError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = "";
  input.classList.remove("inputError");
  $small.classList.remove("danger");
};
