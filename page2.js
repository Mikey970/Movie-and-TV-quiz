let photoContainer = document.querySelector(".photo")
photoContainer.src = "img/batfish.jpeg"
let headerNumber = document.querySelector(".questionHeader") 
let question = document.querySelector(".mainQuestion")
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let score = 0;
let currentQuestion = 1;
button1.addEventListener("click", changePage)
function changePage() {
  if (currentQuestion == 1) {
    headerNumber.innerHTML = "Question 2";
    question.innerHTML = "This endangered species of Lemur is found in the rainforests of madagascar. Its know for knocking on trees to find the hollow points. Do you know it's name?"
    photoContainer.src = "img/ayeaye.jpg"
    button1.value = "superman"
  }
  currentQuestion++
 
}