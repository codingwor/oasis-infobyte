const resultField = document.getElementById("result");

function appendToResult(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = "";
}
function deleteCharacter() {
  resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = "Error";
  }
}
