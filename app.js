function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    gameOverHTML = "<h2 id='progress'> opnieuw: " + quiz.score + "</h2>";
    var element = document.getElementById("progress");
};

function bindSubmitButton(handler) {
    this.submit = this.getElement("#inleveren > button");
    this.submit.addEventListener('click', event => {
        handler();
    })
}

// create questions
var questions = [
    new Question("100 + 300 =", ["100", "200","400", "500"], "400"),

    new Question("400 : 4 =", ["100", "200","300", "400"], "100"),

    new Question("5000 : 25 =", ["250", "200","100", "300"], "250"),

    new Question("4550 : 5 =", ["900", "1000","950", "910"], "910"),

    new Question("3745 - 2867 =", ["875", "878","880", "778"], "878"),

    new Question("7 + 4 x 5 (5 - 4) =", ["27", "55","140", "28"], "27"),

    new Question("200 x 400 : 4 =", ["40000", "20000","200000", "400000"], "20000"),

    new Question("251 + 749 =", ["900", "1000","999", "1001"], "1000"),

    new Question("2020 - 2030 =", ["-1", "0","-10", "10"], "-10"),

    new Question("1 -- 5 =", ["4", "6","-4", "-6"], "6"),


];

var quiz = new Quiz(questions);


populate();
