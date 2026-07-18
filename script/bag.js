function showMyBag(){
    var myBag = [
        { name: "보조배터리", count: 1 },
        { name: "화장품", count: 3 },
        { name: "전자제품", count: 5 },
        { name: "양말", count: 8 }    
    ]

    var totalItems = 0;
    var totalResult = "";

    totalResult += "[🎒 내 가방 속 물품 목록]\n-----------------------------\n";

    for(var i=0; i<myBag.length; i++){
        console.log("아이템: " + myBag[i].name + ", 개수: " + myBag[i].count);
        totalItems += myBag[i].count;
        totalResult += myBag[i].name + " : " + myBag[i].count + "개" +"\n";
    }

    totalResult += "-----------------------------\n";
    totalResult += "총 아이템 개수: " + totalItems + "개";

    alert(totalResult);
}