var iptBin = document.querySelector("#bin");
var bin = [];

iptBin.addEventListener("input", (e) => {
  if ((e.data != 0 && e.data != 1) && e.data != null) msgError();

  if (e.data >= 0 && e.data <= 1 && e.data != null) bin.push(e.data);

  if (e.data == null) {
    let newValues = e.target.value;
    bin = [];
    for (i = 0; i <= newValues.length; i++) {
      if (newValues.charAt(i)) bin.push(newValues.charAt(i));
    }
  }

  iptBin.value = bin.join("");

});

document.querySelector("#btnConvert").addEventListener("click", (e) => {
  e.preventDefault();
  let iptDec = document.querySelector("#decimal");
  if (iptBin.value) iptDec.value = convert2decimal(iptBin.value);
  else msgError()
});

function msgError() {
  window.alert("Please, enter a binary number.")
}

function convert2decimal(arr) {
  let decimal = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0) decimal += Math.pow(2, i);
  }
  return decimal;
}
