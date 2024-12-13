function changText() {
  const getNewtext = document.querySelector("#h1");
  getNewtext.innerHTML = "its text innerHTML";
  getNewtext.style.background = "tomato";
  getNewtext.style.color = "skyblue";
  getNewtext.textContent = "its text textContent";
}

function addList() {
  const list = ["list 1", "list 2", "list 3", "list 4"];
  const getul = document.querySelector("ul");
  for (let index = 0; index < list.length; index++) {
    const newIl = document.createElement("li");
    newIl.textContent = list[i];
    getul.appendChild;(newIl)
  }
  // return;
  // document.querySelector("ul").appendChild(newli);
}

console.log("hallo");
/5/ 