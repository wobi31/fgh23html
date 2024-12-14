function changText() {
  const getNewtext = document.querySelector("#h1");
  getNewtext.innerHTML = "its text innerHTML";
  getNewtext.style.background = "tomato";
  getNewtext.style.color = "skyblue";
  getNewtext.textContent = "its text textContent";
}

function addList() {
  const getUl = document.querySelector("ul")
  for(let i = 0; i<getUl; i++){
    const li = document.createElement("li")
    getUl.appendChild(li)
  }
  // const newli = document.createElement("li");
  // newli.innerHTML = "";
  // document.querySelector("ul").appendChild(newli);

}
function addTr() {
  const getTr = document.createElement("div");
  getTr.innerHTML = "";
  document.querySelector("#div").appendChild(getTr);
}
function Reset() {
  const getPlace = document.querySelector("#div");
  while(getPlace.firstChild){
    getPlace.removeChild(getPlace.firstChild)
  }
  getPlace.insertAdjacentElement("#div")

}