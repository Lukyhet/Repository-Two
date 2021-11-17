/** Array of Objects */

let quiz = [{
    q: "In The Matrix, does Neo take the blue pill or the red pill?",
    options: ["Blue", "Red", "Green", "Silver"],
    answer: 1
},
{
    q: "Who is the main character in The Green Mile?",
    options: ["Paul Edgecomb", "Mr. Jingles", "Brutus Howell", "William Wharton"],
    answer: 0
},
{
    q: "Who is Robert Neville's (will Smith's Character) best friend in I am Legend?",
    options: ["Penny", "Jazz", "Anna", "Samantha"],
    answer: 3
},
{
    q: "The Dark Knight is the second installment of Christopher Nolan's Batman Trilogy and it was released in the year…?",
    options: ["2005", "2016", "2008", "2002"],
    answer: 2
},
{
    q: "In what 1976 thriller does Robert De Niro famously say “You talkin’ to me?",
    options: ["The Irishman", "Taxi Driver", "The Godfather", "Meet the Fuckers"],
    answer: 1
},
{
    q: "Chihiro Ogino is the name of the main character in this movie",
    options: ["Ponyo", "Totoro", "Spirited Away", "Princess Mononoke"],
    answer: 2
},
{
    q: "The line 'No, I am your father' is said by Darth Vader in this episode of Star Wars",
    options: ["Episode V - The Empire Strikes Back", "Episode II: Attack of the Clones ", "Episode III: Revenge of the Sith ", "Episode VI: Return of the Jedi"],
    answer: 0
},
{
    q: "Actress Drew Barrimore's first movie was this one directed by Steven Spilberg",
    options: ["Jaws", "War of the Worlds", "E.T.", "Indiana Jones the Lost ark"],
    answer: 2
},
{
    q: "What American Gothic horror film directed by Francis Ford Coppola was starred by Keanu Reeves?",
    options: ["Constantine", "Speed", "Bram Stocker’s Dracula", "Sharknado"],
    answer: 2
},
{
    q: "Which one is not a zombie movie?",
    options: ["Snowpiercer", "Zombieland ", "28 Days Later ", "Cargo"],
    answer: 0
},
{
    q: "Who directed the film Pan's Labyrinth?",
    options: ["Martin Scorsese", "James Cameron", "Robert Zemeckis", "Guillermo del Toro"],
    answer: 3
},
{
    q: "What type of business does Guido Orefice hope to start in the film Life is Beatuiful?",
    options: ["Book Store", "Pet Store", "Restaurant", "Private School"],
    answer: 0
},
{
    q: "What was Quentin Tarantino‘s first feature as writer/director?",
    options: ["Pulp Fiction", "Once Upon a Time in Hollywood", "Gladiator", "Reservoir Dogs"],
    answer: 3
},
{
    q: "Who directed the movie Get Out?",
    options: ["Tim Burton", "Jordan Peele", "Spike Lee", "Clint Eastwood"],
    answer: 1
},
{
    q: "What is the name of Riley’s imaginary friend in Inside Out?",
    options: ["Sully", "Bing Bong", "Vanellope", "Stich"],
    answer: 1
},
{
    q: "Which actor lost 22 kilos for his famous Joker part?",
    options: ["Joaquin Phoenix", "Jack Nicholson", "Heath Ledger", "Jared Leto"],
    answer: 0
},
{
    q: "Who played Laurie in 1994 little women?",
    options: ["Winona Ryder", "Timothée Chalamet", " Johnny Depp", "Christian Bale"],
    answer: 3
},
{
    q: "which one is not a black and white movie?",
    options: ["Schindler's List", "Black Swan", "American History X", "Persepolis"],
    answer: 1
},
{
    q: "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
    options: ["Ian McKellen", "Viggo Mortensen", "Orlando Bloom", "Elijah Wood"],
    answer: 0
},
{
    q: "Which movie won the Oscar for best picture in 2016?",
    options: ["La la land", "Birdman", "Spotlight", "The Shape of Water"],
    answer: 2
},
{
    q: "Whats the name of Samuel L. Jackson's character in Pulp Fiction?",
    options: ["Jules Winnfield", "Elijah Price", "Ordell Robbie", "Frozono"],
    answer: 0
},
{
    q: "What is the name of the song played at the end of Fight CLub?",
    options: ["Start again", "Army of me", "Where is my mind", "Easy Smack It Up"],
    answer: 2
},
{
    q: "in the movie Signs directed by M. Night Shyamalan, Mel Gibson plays a...?",
    options: ["Sherif", "Policeman", "Astronaut", "Priest"],
    answer: 3
},
{
    q: "What supernatural character did Tilda Swinton played in the movie Constantine?",
    options: ["White Witch Jadis", "Ancient One", "Karen Crowder", "Gabriel"],
    answer: 3
},

{
    q: "Which movie is about a wrongfully imprisoned former banker and his friend?",
    options: ["The Shawshank Redemption", "The Great Escape", "Escape from Alcatraz", "The Grand Budapest Hotel"],
    answer: 0
},

{
    q: "In which movie was this line said: 'They may take away our lives, but they'll never take our freedom!'?",
    options: ["Independence Day", "Dances With Wolves", "Brave Heart", "Apocalipto"],
    answer: 2
},

{
    q: "Where is this movie quote from 'Carpe diem, seize the day boys, make your lives extraordinary!'?",
    options: ["Dead Poets Society", "Home Alone", "Jack", "Mulan"],
    answer: 0
},
{
    q: "What was Brad Pitt's character in Legends of the Fall?",
    options: ["Rusty Ryan", "Tristan Ludlow", "Wardaddy", "Rory Devaney"],
    answer: 1
},
{
    q: "According to this movie the apocalypse happens in the year 2003?",
    options: ["Armageddon", "Deep Impact", "Terminator", "Mad Max"],
    answer: 2
},
{
    q: "In whis movie is 'Precrime' a predictive policing system?",
    options: ["Elysium", "I, Robot", "Blade Runner", "Minority Report"],
    answer: 3
},
]

let shuffleQuestions = [];
let questionNumber = 1;
let questionIndex = 0;
let score = 0;
let incorrectScore = 0;
let startButton = document.getElementById("button");
let homeBox = document.getElementById("home-box");
let questionHolder = document.getElementById("question-area");
startButton.addEventListener('click', startGame);
document.querySelectorAll('.answer')
    .forEach(button => button.addEventListener('click', validateAnswer));
document.getElementById('try-again').addEventListener('click', resetGame);

/** Functions for quiz based on Stack Overflow's How to randomize (shuffle) a JavaScript array?*/

function shuffleQuestionsArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  

function startGame() {
    homeBox.classList.add('hidden-content');
    document.getElementById('question-area').classList.remove('hidden-content');
    shuffleQuestions = shuffleQuestionsArray(quiz);
    displayQuestion(shuffleQuestions[questionIndex], questionNumber);
}

function resetGame() {
    shuffleQuestions = [];
    questionNumber = 1;
    questionIndex = 0;
    score = 0;
    incorrectScore = 0;
    document.getElementById('result-box').classList.add('hidden-content');
    displayScore();
    displayIncorrectScore();
    homeBox.classList.remove('hidden-content');
}

function displayQuestion(question, number) {
    document.getElementById('question-text').innerText = question['q'];
    document.getElementById('question-number').innerText = number;
    document.getElementById('answer1').innerText = question['options'][0];
    document.getElementById('answer2').innerText = question['options'][1];
    document.getElementById('answer3').innerText = question['options'][2];
    document.getElementById('answer4').innerText = question['options'][3];
}

function getNextQuestion() {
    if (questionNumber < 16) {
        questionNumber = questionNumber + 1;
        questionIndex = questionIndex + 1;
        displayQuestion(shuffleQuestions[questionIndex], questionNumber);
    } else {
        finishGame();
    }
}

function displayScore() {
    document.getElementById("score").innerText = score;
}

function displayIncorrectScore() {
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

function validateAnswer(event) {
    console.log('I clicked', event.target.innerText);
    const selectedAnswerText = event.target.innerText;
    const currentQuestion = shuffleQuestions[questionIndex];
    const correctAnswerIndex = currentQuestion.answer;
    const correctAnswerText = currentQuestion.options[correctAnswerIndex];
    console.log(selectedAnswerText, correctAnswerText);
    if (correctAnswerText.localeCompare(selectedAnswerText) === 0) {
        score = score + 1;
        console.log('Correct Answer');
        displayScore();
    } else {
        console.log('Incorrect Answer');
        incorrectScore = incorrectScore + 1;
        displayIncorrectScore();
    }
    getNextQuestion();
}

function finishGame() {
    questionHolder.classList.add('hidden-content');
    document.getElementById('result-box').classList.remove('hidden-content');
    document.getElementById('questions').innerText = 16;
    document.getElementById('total-correct').innerText = score;
    document.getElementById('total-incorrect').innerText = incorrectScore;
    document.getElementById("comment1").innerHTML = '14-16: Great! Have you consider a job in the movie industry?';
    document.getElementById("comment2").innerHTML = '11-14: Good! Keep up with the good movie fandom!';
    document.getElementById("comment3").innerHTML = '5-10: Average, Pop your corn and learn a bit more while enjoying a movie!';
    document.getElementById("comment4").innerHTML = '0-4: Booo...We know you can do better.';
    if (score >= 14) {
        console.log('14-16');
        var textToHighlight = '<span style="color:red"> 14-16: Great! Have you consider a job in the movie industry?</span>';
        document.getElementById("comment1").innerHTML = textToHighlight;
    } else if (score >= 11) {
        console.log('11-14');
        var textToHighlight = '<span style="color:red"> 11-14: Good! Keep up with the good movie fandom!</span>';
        document.getElementById("comment2").innerHTML = textToHighlight;
    } else if (score >= 5) {
        console.log('5-10');
        var textToHighlight = '<span style="color:red"> 5-10: Average, Pop your corn and learn a bit more while enjoying a movie! </span>';
        document.getElementById("comment3").innerHTML = textToHighlight;
    } else {
        console.log('0-4');
        var textToHighlight = '<span style="color:red"> 0-4: Booo...We know you can do better. </span>';
        document.getElementById("comment4").innerHTML = textToHighlight;
    }
}



/**sound for button when clicked */

const sounds = ['tick'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=> {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);

})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
        
    })
}



