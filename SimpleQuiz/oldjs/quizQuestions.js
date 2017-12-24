//Create a dummy namespaceURI
var com;
if(!com) {
    com = {};
}
if(!com.flametreepublishing) {
    com.flametreepublishing = {};
}

//Create an empty Array in which to store the Question objects
com.flametreepublishing.questions = [];
//var questions = [];

//Now we use Array.push to add Object literals to the questions array.
//We've chosen to break the statements across multiple lines for the
//sake of legibility, but this isn't necessary - each statement could
//be written on one (long) line.

//QUESTION 1
com.flametreepublishing.questions.push({
	questionText: "Approximately how far away from the Earth is the Sun?",
	answers: ["200 miles", "93,000,000 miles", "49,000,000 miles", "150,000 miles"],
	correctAnswerIndex: 1}
);

//QUESTION 2
com.flametreepublishing.questions.push({
	questionText: "How many planets are there in our solar system?",
	answers: ["6", "7", "8", "9"],
	correctAnswerIndex: 2}
);

//QUESTION 3
com.flametreepublishing.questions.push({
	questionText: "Which of these is a moon of Jupiter?",
	answers: ["Ganymede", "Miranda", "Enceladus", "Mars"],
	correctAnswerIndex: 0}
);

//QUESTION 4
com.flametreepublishing.questions.push({
	questionText: "Which of these is a peepl like uzzz?",
	answers: ["Mike", "Miranda", "Jason", "Yr Uncle"],
	correctAnswerIndex: 2}
);

//dibbuh