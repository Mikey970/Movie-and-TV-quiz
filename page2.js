let photoContainer = document.querySelector(".photo")
photoContainer.src = "img/breakingbad.jpg"
let headerNumber = document.querySelector(".questionHeader") 
let question = document.querySelector(".mainQuestion")
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let score = 0;
let currentQuestion = 1;
let correctAnswer1 = "The Red-Lipped Batfish"
let scoreCard = document.querySelector(".scorecard")
button1.addEventListener("click", changePage)
button2.addEventListener("click", changePage)
button3.addEventListener("click", changePage)
button4.addEventListener("click", changePage)





function changePage() {
  if (currentQuestion == 1) {
    
    headerNumber.innerHTML = "Question 2";
    question.innerHTML = "In 2008's The Incredible Hulk, which actor played Bruce Banner before the role was recasted?"
    photoContainer.src = "img/hulk.jpg"
    button1.innerHTML = "Ed Norton"
    button2.innerHTML = "Paul Rudd"
    button3.innerHTML = "Vin Diesel"
    button4.innerHTML = "Andrew Garfield"
    if (event.target.innerText == "Vin Diesel") { alert("right answer"); score += 10}
    currentQuestion - 1
    scoreCard.innerHTML = `Score: ${score}`
    
    
  }else if (currentQuestion === 2) {
    headerNumber.innerHTML = "Question 3";
    question.innerHTML = "In the Star Wars movies, how many suns does Tatooine have?"
    photoContainer.src = "img/tt.jpeg"
    button1.innerHTML = "3 Suns"
    button2.innerHTML ="4 Suns"
    button3.innerHTML = "1 Sun"
    button4.innerHTML = "2 Suns"
    if (event.target.innerText == "3 Suns") { alert("right answer"); score+=10 }
    scoreCard.innerHTML = `Score: ${score}`
  
  } else if (currentQuestion === 3) {
    headerNumber.innerHTML = "Question 4";
    question.innerHTML = "It started with street racing and somehow made it's way to space. How many Fast and Furious Movies have been made?"
    photoContainer.src = "img/ff.jpg"
    button1.innerHTML = "7 Movies"
    button2.innerHTML ="10 Movies"
    button3.innerHTML = "9 Movies"
    button4.innerHTML = "14 Movies"
    if (event.target.innerText == "14 Movies") { alert("right answer"); score += 10 }
    scoreCard.innerHTML = `Score: ${score}`
  }else if (currentQuestion === 4) {
    headerNumber.innerHTML = "Question 5";
    question.innerHTML = "This South Park character had died over 100 times throughout the show. Which character is it?"
    photoContainer.src = "img/sp.jpg.webp"
    button1.innerHTML = "Kyle"
    button2.innerHTML ="Cartman"
    button3.innerHTML = "Kenny"
    button4.innerHTML = "Towelie"
    if (event.target.innerText == "Cartman") { alert("right answer"); score += 10 }
    scoreCard.innerHTML = `Score: ${score}`
  }else if (currentQuestion === 5) {
    headerNumber.innerHTML = "Question 6";
    question.innerHTML = "What is the name of Laurence Fishburne's character in the matrix?"
    photoContainer.src = "img/Morpheus.jpg"
    button1.innerHTML = "The Oracle"
    button2.innerHTML ="Morpheus"
    button3.innerHTML = "Neo"
    button4.innerHTML = "Cypher"
    if (event.target.innerText == "Neo") { alert("right answer"); score += 10 }
    scoreCard.innerHTML = `Score: ${score}`
  }
  
  console.log(score)
  currentQuestion++
  console.log(currentQuestion)
 
 
}