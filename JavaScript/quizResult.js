function quizResult(){
    let questions = ["q1", "q2", "q3", "q4", "q5"];
    let totalScore = 0;
    let result = "";
    for (let i = 0; i < questions.length; i++){
        let options = document.getElementsByName(questions[i]);
        let chosenOption = 0;
        for (let j = 0; j < options.length; j++){
            if (options[j].checked){
                chosenOption = options[j].value;
            }
        }
    totalScore += Number(chosenOption);
    }
    
    if (totalScore <= 5){
        result = "Your mental health is in a good state! Keep up the good work!";
    } 
    else if (totalScore <= 10){
        result = "Your mental health is moderately well, but there is room for improvement. Consider: <tips>";
    } 
    else {
        result = "Your mental health needs attention. Consider visiting the Zen Zone for resources and support.";
    }
    document.getElementById("result-div").innerHTML = result;
}