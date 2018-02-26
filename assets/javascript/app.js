$(document).ready(function() {

$("button.start").on("click", function() {
    $(".startScreen").hide();
    $("header, .instructions, .score, .timeRemaining, .questions").show();
});
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var numberUnanswered = 0;

    //question and answer objects
    var question1info = {
        question:"How did Jake get his powers?",
        wrongAnswer1: "Finn gave it to him in a 'real dream'",
        wrongAnswer2: "Inhaled toxic gas",
        correctAnswer: " Rolled around in a mud puddle"
    };

    var question2info = {
        question:" Marceline is not a traditional vampire. What does she primarily eat? ",
        wrongAnswer1: "Garlic Rolls",
        wrongAnswer2: "Pancakes",
        correctAnswer: "Shade's Of Red"
    };

    var question3info = {
        question:" How old is Finn?",
        wrongAnswer1: "9 YRO",
        wrongAnswer2: "22 YRO",
        correctAnswer: "13 YRO"
    };

    var question4info = {
        question:" Which of the following is NOT a princess?",
        wrongAnswer1: "Hot Dog Princess",
        wrongAnswer2: "Slime Princess",
        correctAnswer: "Ice Princess"
    };

    var question5info = {
        question:"Which of these characters is a giant, floating wolf head?",
        wrongAnswer1: "Duke Of Nuts",
        wrongAnswer2: "Flambo",
        correctAnswer: "Party God"
    };



    function populateQuestion (DOMlocation, questionXinfo) {
        $(DOMlocation).html(questionXinfo);
    };

    function populateContent (DOMlocation, questionContent) {
        $(DOMlocation).append(questionContent);
    };

    function questionClickHandlers (DOMlocation, inputqX) {
        $(DOMlocation).on("click", "input", function () {
            console.log({Correct:$(this).attr("value")});
            $(inputqX).prop("disabled", true);
            });
    };

    function scoreKeeper () {
        $(".totalScore").html("Correct: "+ numberCorrect + ", ");
        $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
        $(".totalScore").append("Unanswered: " + numberUnanswered);
    };

    function unansweredChecker(questionBlock) {
         if ($(questionBlock).attr("value") === "unchecked") {
        numberUnanswered++;
        scoreKeeper();
        console.log("bananas");
        }
    };

    function attributeRemover(inputqX, questionBlock) {
        $(inputqX).on("click", function () {
            $(inputqX).each(function () {
                if ($("input.q1").is(":checked")) {
                    $(questionBlock).removeAttr("value");
                }
            });
        });
    };

    //Question 1
    populateQuestion(".question1", question1info.question);
    populateContent(".Q1wrongAnswer1", question1info.wrongAnswer1);
    populateContent(".Q1wrongAnswer2", question1info.wrongAnswer2);
    populateContent(".Q1correctAnswer", question1info.correctAnswer);
    //Question 1 click handler
    questionClickHandlers (".Q1questions", "input.q1");
    //Question 2
    populateQuestion(".question2", question2info.question);
    populateContent(".Q2wrongAnswer1", question2info.wrongAnswer1);
    populateContent(".Q2wrongAnswer2", question2info.wrongAnswer2);
    populateContent(".Q2correctAnswer", question2info.correctAnswer);
    //Question 2 click handler
    questionClickHandlers(".Q2questions", "input.q2");
    //Question 3
    populateQuestion(".question3", question3info.question);
    populateContent(".Q3wrongAnswer1", question3info.wrongAnswer1);
    populateContent(".Q3wrongAnswer2", question3info.wrongAnswer2);
    populateContent(".Q3correctAnswer", question3info.correctAnswer);
    //Question 3 click handler
    questionClickHandlers(".Q3questions", "input.q3");

    //Question 4
    populateQuestion(".question4", question4info.question);
    populateContent(".Q4wrongAnswer1", question4info.wrongAnswer1);
    populateContent(".Q4wrongAnswer2", question4info.wrongAnswer2);
    populateContent(".Q4correctAnswer", question4info.correctAnswer);
    //Question 4 click handler
    questionClickHandlers(".Q4questions", "input.q4");

    //Question 5
    populateQuestion(".question5", question5info.question);
    populateContent(".Q5wrongAnswer1", question5info.wrongAnswer1);
    populateContent(".Q5wrongAnswer2", question5info.wrongAnswer2);
    populateContent(".Q5correctAnswer", question5info.correctAnswer);
    //Question 4 click handler
    questionClickHandlers(".Q5questions", "input.q4");

    attributeRemover("input.q1", ".Q1questions")
    attributeRemover("input.q2", ".Q2questions")
    attributeRemover("input.q3", ".Q3questions")

    $(".submit").on("click", function(event) {
        console.log({isChecked: $("input").is(":checked")});
        unansweredChecker(".Q1questions");
        unansweredChecker(".Q2questions");
        unansweredChecker(".Q3questions");
        $(this).prop("disabled", true);

        $("input.correct:checked").each(function (){
            if ($(".correct").is(":checked")) {
                numberCorrect++;
                console.log({numberCorrect: numberCorrect});
                scoreKeeper();
            }
        });

        $("input.answer:checked").each(function() {
            if ($("input.answer").is(":checked")) {
                numberIncorrect++;
                console.log({numberIncorrect: numberIncorrect});
                scoreKeeper();
            }

        });

    });

}); 
