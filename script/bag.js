function showMyBag(){
    var myBag = [
        { name: "옷", count: 5 },
        { name: "신발", count: 3 },
        { name: "책", count: 10 },
        { name: "노트북", count: 1 }    
    ]

    var totalItems = 0;

    for(var i=0; i<myBag.length; i++){
        console.log("아이템: " + myBag[i].name + ", 개수: " + myBag[i].count);
        totalItems += myBag[i].count;
    }

    alert("내 가방 정보:\n" + "총 아이템 개수: " + totalItems);
}