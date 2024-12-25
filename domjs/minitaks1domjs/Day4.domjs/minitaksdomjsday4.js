function btn() {
  // const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((ress) => ress.json())
      .then((data) => console.log(data));
  } catch (error) {
    throw ("error data not found", error);
  }
  const resultData = document.getElementById("resultData");
  // resultData.append(data)
  resultData.innerHTML = ` <p>${fetch}</p> `;
}

const origin = "https://openlibrary.org";

const form = document.querySelector("form");
const result = document.querySelector("#resultData");

form.addEventListener('submit', function(event){
  event.preventDefault();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const body = {
    nama: event.target.name.value,
    body: event.target.body.value,
    id: event.target.id.value,
  };
  try{
    const req = new Request(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    const ress = await fetch(req);
    if(!ress.ok)throw new error(ress.statusText)
      const json = await ress.json()
    result.document.creatElement("div")
    result.innerHTML = `<p>Name${nama}</p><p>Body${body}</p>
    <p>User id${id}</p> `
  } catch(error){
    console.log(error)
  } finally {
    console.log('sukses')
  }
});
