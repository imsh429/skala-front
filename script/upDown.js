function startGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;

    console.log("컴퓨터가 선택한 숫자 (디버그용): " + computerNum);

    while (true) {
        var userNum = Number(prompt("1부터 50 사이의 숫자를 입력하세요 (종료하려면 '취소'를 누르세요):"));
        if (userNum === 0) {
            alert("게임을 종료합니다.");
            break;
        }

        count++;

        if(userNum < computerNum){
            alert("더 큰 수를 입력하세요");
        } else if (userNum > computerNum) {
            alert("더 작은 수를 입력하세요");
        } else if(userNum === computerNum){
            alert("축하합니다! " + count + "번 만에 맞추셨습니다.");
            break;
        } else{
            alert("유효한 숫자를 입력하세요.");
        }


    }
}