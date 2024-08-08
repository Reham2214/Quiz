//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
const categorySelect = document.getElementById('category');
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array
const questions = {
    general: [
      { id: "0",
        question: 'What is the capital of France?',
       options: ['Paris', 'Berlin', 'Madrid', 'Rome'], 
       correct: 'Paris',
      },
      { id: "1",
        question: 'Which herb is often used in Italian cuisine and is a key ingredient in pesto sauce?',
       options: ['Thyme', 'Rosemary', 'Basil', 'Parsley'],
       correct: 'Basil',
    },
    { id: "2",
        question: 'Which vitamin is commonly found in citrus fruits such as oranges and lemons?',
       options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
       correct: 'Vitamin C', 
    },
    { id: "3",
        question: 'What is the recommended daily water intake for the average adult?',
       options: ['1 liter', '2 liters', '3 liters', '4 liters'],
       correct: '2 liters', 
    },
    { id: "4",
        question: 'What does the acronym "CPU" stand for in computing?',
       options: [' Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Central Peripheral Unit'],
       correct: 'Central Processing Unit', 
    },
    ],
    Computer : [
        {
            id: "0",
            question: "Who invented Computer?",
            options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
            correct: "Charles Babbage",
        },
        {
            id: "1",
            question: "What do you call a computer on a network that requests files from another computer?",
            options: ["A client", "A host", "A router", "A web server"],
            correct: "A client",
        },
        {
            id: "2",
            question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
            options: ["Peripheral", "Clip art", "Highlight", "Execute"],
            correct: "Peripheral",
        },
        {
            id: "3",
            question: "The main computer that stores the files that can be sent to computers that are networked together is:",
            options: ["Clip art", "Mother board", "Peripheral", "File server"],
            correct: "File server",
        }, {
            id: "4",
            question: "How can you catch a computer virus?",
            options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
            correct: "Opening e-mail attachments",
        },
    ],
    science: [
      { id: "0",
        question: 'What is the chemical symbol for water?',
       options: ['H2O', 'CO2', 'O2', 'CH4'],
       correct: 'H2O', 
    },
      {id: "1",
         question: 'Which planet is known as the Red Planet?',
       options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
       correct: 'Mars',
     },
     {
        id: "2",
        question: "What is the chemical symbol for the element gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        correct: "Au",
    },
    {
        id: "3",
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Golgi apparatus"],
        correct: "Mitochondria",
    }, {
        id: "4",
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Brain", "Skin"],
        correct: "Skin",
    },
    ],
    history: [
      {id: "0", 
        question: 'In which year did World War II end?', 
      options: ['1943', '1945', '1948', '1950'],
      correct: '1945',
     },
      {id: "1",
         question: 'Who was the first President of the United States?', 
      options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Abraham Lincoln'],
      correct: 'George Washington',
     },
     {
        id: "2",
        question: "Who is the founder of modern Saudi Arabia and the first King of the country?",
        options: ["King Saud", "King Abdulaziz Al Saud", "King Faisal", "King Salman"],
        correct: "King Abdulaziz Al Saud",
    },
    {
        id: "3",
        question: "In what year did the Kingdom of Saudi Arabia officially come into existence?",
        options: ["1926", "1932", "1945", "1956"],
        correct: "1932",
    }, {
        id: "4",
        question: "What is the significance of the city of Mecca in Saudi Arabian history?",
        options: [" It is the capital city", "It is the birthplace of Prophet Muhammad", "It is the economic center", "It is the political center"],
        correct: "It is the birthplace of Prophet Muhammad",
    },
    ],
    beauty: [
        { id: "0",
          question: 'Which of the following natural ingredients is often used in skincare for its moisturizing properties?',
         options: ['Honey', 'Lemon', 'Vinegar', 'Salt'],
         correct: 'Honey', 
      },
        {id: "1",
           question: 'Which vitamin is often associated with promoting healthy skin and is commonly found in fruits like oranges and strawberries?',
         options: ['Vitamin A', 'Vitamin C', 'Vitamin E', 'Vitamin K'],
         correct: 'Vitamin C',
       },
       {
          id: "2",
          question: "What term is used to describe the science and study of beauty, particularly in relation to the creation and appreciation of beauty in art and nature?",
          options: ["Esthetics", "Cosmetology", "Dermatology", "Aromatherapy"],
          correct: "Esthetics",
      },
      ],
  };

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        const selectedCategory = categorySelect.value;
        const categoryQuestions = questions[selectedCategory];
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == categoryQuestions.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + categoryQuestions.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    const selectedCategory = categorySelect.value;
    const categoryQuestions = questions[selectedCategory];
    //randomly sort questions
    categoryQuestions.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of categoryQuestions) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + categoryQuestions.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    const selectedCategory = categorySelect.value;
    const categoryQuestions = questions[selectedCategory];
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === categoryQuestions[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == categoryQuestions[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};


