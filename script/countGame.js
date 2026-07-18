function countGame() {
    alert("⏱️ [확인]을 누르면 타이머가 시작됩니다.\n마음속으로 정확히 '7초'를 세고 다음 [확인]을 누르세요! \n\n 종료하려면 '취소'를 누르세요");

    var startTime = Date.now();

    alert("⏰ 타이머 작동중 ...\n\n7초가 되었다고 생각할 때 [확인]을 누르세요!");

    var endTime = Date.now();

    var elapsedTime = (endTime - startTime) / 1000;
    var diff = Math.abs(elapsedTime - 7);

    var resultReport = "게임 결과\n" +
                        "------------------------\n" +
                        "- 목표 시간: 7.00초\n" +
                        "- 당신의 기록: " + elapsedTime.toFixed(2) + "초\n" +
                        "- 오차 범위: " + diff.toFixed(2) + "초\n" +
                        "------------------------\n";

    if (diff <= 0.1) {
        resultReport += "🏅 1등급: 인간 시계 그 자체이시군요!";
    } else if (diff <= 0.3) {
        resultReport += "🏅 2등급: 생체 시계가 아주 정확합니다.";
    } else if (diff <= 0.6) {
        resultReport += "🏅 3등급: 나쁘지 않은 감각입니다.";
    } else if (diff <= 1.2) {
        resultReport += "🏅 4등급: 조금 더 집중해 보세요!";
    } else {
        resultReport += "🏅 5등급: 혹시 졸으셨나요...?";
    }
    
    alert(resultReport);
}