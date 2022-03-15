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
let correctAnswer1 = "The Red-Lipped Batfish"
let scoreCard = document.querySelector(".scorecard")
button1.addEventListener("click", changePage)
button2.addEventListener("click", changePage)
button3.addEventListener("click", changePage)
button4.addEventListener("click", changePage)





function changePage() {
  if (currentQuestion == 1) {
    
    headerNumber.innerHTML = "Question 2";
    question.innerHTML = "This endangered species of Lemur is found in the rainforests of madagascar. Its know for knocking on trees to find the hollow points. Do you know it's name?"
    photoContainer.src = "img/ayeaye.jpg"
    button1.innerHTML = "The Aye-Aye"
    button2.innerHTML = "The Mandrill"
    button3.innerHTML = "A Tarsier"
    button4.innerHTML = "Emperor Tamarins"
    if (event.target.innerText == "A Tarsier") { alert("right answer"); score += 10}
    currentQuestion - 1
    scoreCard.innerHTML = `Score: ${score}`
    
    
  }else if (currentQuestion === 2) {
    headerNumber.innerHTML = "Question 3";
    question.innerHTML = "This animal is the most endangered species on the planet. As of 2019 only 9 were believed to be left. Do you know this animal?"
    photoContainer.src = "img/vaquita.jpg"
    button1.innerHTML = "The Amazon River Dolphin"
    button2.innerHTML ="Hector's Dolphin"
    button3.innerHTML = "The Sei Whale"
    button4.innerHTML = "The Vaquita"
    if (event.target.innerText == "The Amazon River Dolphin") { alert("right answer"); score+=10 }
    scoreCard.innerHTML = `Score: ${score}`
  
  } else if (currentQuestion === 3) {
    headerNumber.innerHTML = "Question 4";
    question.innerHTML = "This sea slug may look cool, but don't go near it. Capable of stealing venom from the Man-O-War jellyfish you do not want to get stung by this thing. This animals nickname is..."
    photoContainer.src = "img/bluedragon.jpg"
    button1.innerHTML = "The Blue Kirby"
    button2.innerHTML ="The Blue Dragon"
    button3.innerHTML = "Blue Sea Hare"
    button4.innerHTML = "Blue Rayed Limpet"
    if (event.target.innerText == "Blue Rayed Limpet") { alert("right answer"); score += 10 }
    scoreCard.innerHTML = `Score: ${score}`
  }else if (currentQuestion === 4) {
    headerNumber.innerHTML = "Question 5";
    question.innerHTML = "This Animal has the ability to regenerate almost any part of its body, Including the front of its brain. Can you guess it's name?"
    photoContainer.src = "img/axo.jpg"
    button1.innerHTML = "Axolotl"
    button2.innerHTML ="Zeus Lizard"
    button3.innerHTML = "Fire Salamander"
    button4.innerHTML = "A Siren"
    if (event.target.innerText == "Zeus Lizard") { alert("right answer"); score += 10 }
    scoreCard.innerHTML = `Score: ${score}`
  }
  
  console.log(score)
  currentQuestion++
  console.log(currentQuestion)
 
 
}