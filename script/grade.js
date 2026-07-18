function checkGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;
    var count = subjects.length;

    var maxScore = null;
    var maxSubject = "";
    var minScore = null;
    var minSubject = "";

    for (var i = 0; i < count; i++) {
        var input = prompt(subjects[i] + " 점수를 입력하세요 (0~100):");

        if (input === null) {
            alert("계산기를 종료합니다.");
            return;
        }

        var score = Number(input);
        
        if (score < 0 || score > 100 || isNaN(score)) {
            alert("유효한 점수를 입력하세요 (0~100).");
            i--;
            continue;
        }

        total += score;

        if (maxScore === null || score > maxScore) {
            maxScore = score;
            maxSubject = subjects[i];
        }
        if (minScore === null || score < minScore) {
            minScore = score;
            minSubject = subjects[i];
        }
    }
    
    var average = total / count;

    var scoreReport = "성적 결과\n" +
                      "------------------------\n" +
                      "- 총점: " + total + "점\n" +
                      "- 평균: " + average.toFixed(2) + "점\n\n" +
                      "- 효자 과목: " + maxSubject + " (" + maxScore + "점)\n" +
                      "- 취약 과목: " + minSubject + " (" + minScore + "점)\n" +
                      "------------------------\n";
    
    if (average >= 60) {
        alert(scoreReport + "결과: 합격입니다~ 축하합니다!");
    } else {
        alert(scoreReport + "결과: 불합격입니다ㅠㅠ 다음엔 더 열심히!");
    }
}