//Reference the variables
const quizApp = document.getElementById('quiz-app')
//get reference for all the questions
const questions = document.getElementById('question')
const answer = document.querySelectorAll('answer')

const a_text = document.getElementById('questionA_text')
const b_text = document.getElementById('questionB_text')
const c_text = document.getElementById('questionC_text')
const d_text = document.getElementById('questionD_text')

//getting our submit button reference and making it display new questions once answer has been clicked. 
const submitButton = document.getElementById('submit-btn')
submitButton.addEventListener('click', displayQuestion)

//score for each question answered correctly
let currentScore = 0
const currentQuiz = 0

//Creating array to hold the quiz questions and answers.
const question_list = [
    {
        question: 'What is a gateway?', 
        a: "1",
        b: "3",
        c: "2",
        d: '4',
        theAnswer: "c",
    },

    {
        question: 'What is 2 + 2?', 
        a: "1",
        b: "3",
        c: "2",
        d: '4',
        theAnswer: "b",
    },

    {
        question: 'What is a Pokemon?', 
        a: "1",
        b: "3",
        c: "2",
        d: '4',
        theAnswer: "d",
    },

    {
        question: 'What is a tablet?', 
        a: "1",
        b: "3",
        c: "2",
        d: '4',
        theAnswer: "a",
    },

    {
        question: 'What is a gateway?', 
        a: "1",
        b: "3",
        c: "2",
        d: '4',
        theAnswer: "c",
    }
]

//Create a start button that hides when user presses Play and shows random question. 

//Once the quiz starts, display questions
function startQuiz () {
    deselectAnswer()
    displayQuestion()
    //hide start button
    console.log('Quiz has started')
}

//display quetions at random.
function displayQuestion() {
    console.log('displaying next question')

    const currentQuizData = question_list[currentQuiz]

    questions.innerText = currentQuizData.questions
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function selectAnswer() {
  
}

function deselectAnswer() {

}


