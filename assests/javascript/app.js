let count = 60;
let timeDisplay = $('#time');
let timer = setInterval(runTimer, 1000);

let answers = ["TPM", "RB", "104", "Paul", "4"];

let correctAns = 0;
let incorrectAns = 0;
let unanswered = 5;

function runTimer(){
    count--;
    $('#time').text(count);
    if(count < 1) {
        clearInterval(timer);
        calculateAnswers();
    }
}

function calculateAnswers() {
    let usrAnswers = [
        $("input[name='q1']:checked").val(), 
        $("input[name='q2']:checked").val(),
        $("input[name='q3']:checked").val(),
        $("input[name='q4']:checked").val(),
        $("input[name='q5']:checked").val()
    ];

    for(i = 0; i < answers.length; i++) {
        if(usrAnswers[i] === answers[i]) {
            correctAns++;
            unanswered--;
        }
        else if(usrAnswers[i] !== undefined && usrAnswers[i] !== answers[i]) {
            incorrectAns++;
            unanswered--;
        }
    }
    $("#gameTable").css("display","none");
    $("#answersDisplay").css("display","block");
    $("#correctAns").text(correctAns);
    $("#incorrectAns").text(incorrectAns);
    $("#unanswered").text(unanswered);
}