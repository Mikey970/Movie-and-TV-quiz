# Movie-and-TV-quiz
A quiz that combines Javascript, HTML and CSS to create a quiz on TV and Movies. Score is kept and a results page is shown at the end of the game.

# Functionality
A score accumulator is used to add 10 to the score every time the player gets an answer right. The program uses the the inner button text of the previous choice to determine if the player clicked the right answer on the current choice. Every time a button is clicked the current question accumulator has 1 added to it. Depending on the value of the current question accumulator the inner html of the buttons, the question and image are changed using the DOM and if conditionals.
