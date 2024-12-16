function changText() {
  const getNewtext = document.querySelector("#h1");
  // getNewtext.innerHTML = "its text innerHTML";
  getNewtext.style.background = "tomato";
  getNewtext.style.color = "skyblue";
  // getNewtext.textContent = "its text textContent";
  alert("masuk")
}

const list = [1, 2, 3, 4];
function addList() {
  const getUl = document.querySelector("ul");
  for (let i = 0; i < list.length; i++) {
    const creatli = document.createElement("li");
    creatli.textContent = list[i];
    // creatli.style.background = "orange";
    getUl.appendChild(creatli);
    console.log(getUl);
  }
}
function addTr() {
  const getTr = document.createElement("div");
  // getTr.innerHTML = "";
  document.querySelector("#div").appendChild(getTr);
}
function Reset() {
  const getPlace = document.querySelector("#div");
  while (getPlace.firstChild) {
    getPlace.removeChild(getPlace.firstChild);
  }
  // getPlace.insertAdjacentElement("#div");
}
