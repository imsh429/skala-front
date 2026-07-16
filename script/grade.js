function checkGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;
    
    var count = subjects.length;

    

    for (var i = 0; i < count; i++) {

        var score = Number(prompt(subjects[i] + " 점수를 입력하세요 (0~100):"));
        
        if(score<0 || score>100 || isNaN(score)){
            alert("유효한 점수를 입력하세요 (0~100).");
            i--;
            return;
        }
            total += score;
    }
    var average = total / count;
    if(average >=60){
        alert("총점: " + total + ", 평균: " + average.toFixed(2) + ", 결과: 합격입니다!");
    }
    else{
        alert("총점: " + total + ", 평균: " + average.toFixed(2) + ", 결과: 불합격입니다!");
    }
}
