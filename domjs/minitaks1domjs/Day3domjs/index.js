const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const urlSearchParams = new URLSearchParams(formData).toString();
  const saveData = document.getElementById("data");
  const getNama = formData.get("name");
  const getGender = formData.get("Gender");
  saveData.innerHTML = `
<p>Nama: ${getNama}</p>
<p>Gender: ${getGender}</p>
<pre>${urlSearchParams}</pre> 
`;
  {
  }
  console.log(getNama);
  console.log(getGender);
});


const form2 = document.getElementById("myform2");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData2 = new FormData(form2)
  // data di simpan
  const data = {}
  formData2.forEach((value, key) =>{
    data[key] = value;
  });

  const json = JSON.stringify(data)
  const resultInput = document.getElementById("resultinput")
  resultInput.innerHTML = `<span>${json}</span>`
  console.log(json)
});

