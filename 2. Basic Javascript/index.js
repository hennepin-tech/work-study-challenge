// Normal Function & if statement
window.onload = () => {
  const elem = document.getElementById('box')
  
  elem.addEventListener("click", function() {
    if(this.style.backgroundColor === 'red'){
      this.style.backgroundColor = 'green'
    } else { this.style.backgroundColor = 'red'}
  });
}

// Normal Function & Ternary
// window.onload = () => {
//   const elem = document.getElementById('box')
  
//   elem.addEventListener("click", function() {
//     this.style.backgroundColor === 'red' ?
//       this.style.backgroundColor = 'green':
//       this.style.backgroundColor = 'red'
//   });
// }

// Arrow Function & Ternary
// window.onload = () => {
//   const elem = document.getElementById('box')
  
//   elem.addEventListener("click", () => {
//     let node = document.getElementById('box')
//     node.style.backgroundColor === 'red' ? 
//       node.style.backgroundColor = 'green':
//       node.style.backgroundColor = 'red'
//   });
// }