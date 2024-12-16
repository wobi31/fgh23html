function handleQuery() {
  const form = document.querySelector("form");
  const inputs = document.getElementsByTagName("input")
  const params = new URLSearchParams({})
  for(let input of inputs){
    params.append(input.name)
  }
}

function change() {
  const pass = document.getElementById("pwd");
  if (pass.type === "password") {
    pass.type = "text";
    return;
  }
  // pass.te
  pass.type = "password";
}

function colorRandom() {
  function Randommizer() {
    const getNumber = Math.floor(Math.random() * 255);
    return getNumber;
  }
  const inputColor = document.querySelector("article");
  const newColor = `rgb(${Randommizer()}, ${Randommizer()}, ${Randommizer()})`;
  // console.log(newColor)
  inputColor.style.backgroundColor = newColor;
  console.log("masuk");
}

function changeText() {
  const getinput = document.querySelector(
    "section>div:nth-child(2) > textarea"
  );
  const getplace = document.querySelector("section>div:nth-child(1)>h6");

  getplace.textContent = getinput.value;
}
