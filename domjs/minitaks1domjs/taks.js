const  m = document.getElementById("m")
m.style.backgroundColor = 'lightcoral';

const box = document.getElementsByClassName("box")
box[0].style.backgroundColor = 'blue';
box[1].style.backgroundColor = 'blue';
box[2].style.backgroundColor = 'blue';
box[3].style.backgroundColor = 'blue';

const s = document.getElementById("s")

let width = window.innerWidth
let heigh = window.innerHeight

// size.document.getElementById("s")

const t = document.querySelector("title")

alert(`Ukuran Lebar ${width}`)
alert(`Ukuran Tinggi ${heigh}`)

console.log(`Ukuran Lebar ${width}`)
console.log(`Ukuran Tinggi ${heigh}`)
console.log(t)
console.log(s)
console.log(m)
console.log(box)
// console.log('hallo')
// alert('hallo anjing')