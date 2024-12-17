function btn(){
  try {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(ress => ress.json())
    .then((data) => console.log(data))
  } catch (error) {
    throw('error data not found' , error)
  }
  const resultData = document.getElementById("resultData")
  // resultData.append(data)
  resultData.innerHTML =` <p>${fetch()}</p> `
}

const origin = "https://openlibrary.org"

async function form(event){
  event.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data;

    authors.map(function(author) {
      // let li = document.createElement('li');
      // let name = document.createElement('h2');
      // let email = document.createElement('span');
// 
      // name.innerHTML = `${author.name}`;
      // email.innerHTML = `${author.email}`;
    });
   }
}