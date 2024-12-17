const origin = "https://openlibrary.org"

async function serch(event) {
  event.preventDefault();
  const params = URLSearchParams({
    title: event.target.serch.value
  });
  const btnSerch = document.querySelector("form button[type=submit]")
  const texbtn = document.querySelector('button p')
  const load = document.querySelector('span')
  try{
    const url = `${origin}/search.json?${params.toString()}`
    const request = new Request(url);
    btnSerch.disabled = true;
    texbtn.classList.add("hidden")
    load.classList.remove("hidden")
    const respone = await fetch(request)
    const json = await respone.json()
    console.log(json)
  } catch(error){
    console.log(error)
  } finally{
    btnSerch.disabled = false;
    texbtn.classList.add("hidden")
    load.classList.remove("hidden")
  }
}
