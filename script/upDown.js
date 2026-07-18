function startGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;
    const MAX_ATTEMPTS = 5; //최대 목숨

    console.log("컴퓨터가 선택한 숫자 : " + computerNum);

    while (count < MAX_ATTEMPTS) {
        let remainingLives = MAX_ATTEMPTS - count;

        var userNum = prompt("1부터 50 사이의 숫자를 입력하세요.\n(남은 기회: " + remainingLives + "번 / 종료하려면 '취소')");
        
        if (userNum === null) {
            alert("게임을 종료합니다.");
            break;
        }

        userNum = Number(userNum);

        if (isNaN(userNum) || userNum < 1 || userNum > 50){
            alert("유효한 값을 입력해주세요 (0~50).");
            continue;
        }

        count++;

        if(userNum < computerNum){
            alert("더 큰 수를 입력하세요. (남은 기회: " + (MAX_ATTEMPTS - count) + "번)");
        } else if (userNum > computerNum) {
            alert("더 작은 수를 입력하세요. (남은 기회: " + (MAX_ATTEMPTS - count) + "번)");
        } else if (userNum === computerNum) {
            alert("축하합니다! " + count + "번 만에 맞추셨습니다.");
            break;
        } else {
            alert("올바른 숫자를 입력해주세요.");
        }    
    }

    if (count === MAX_ATTEMPTS) {
        alert("실패! " + MAX_ATTEMPTS + "번의 기회를 모두 소진하셨습니다.\n컴퓨터의 숫자는 [" + computerNum + "]였습니다.");
    }
}