var edit_Name = function(value,rename){
    document.write(value.name+"님의 정보를 수정하겠습니다.</br>");
    document.write("수정 전:"+value.name+"</br>");
    var rename;
    value.name = rename;
    document.write("수정 후:"+value.name+"</br></br>");
}
var edit_Phone = function(value,rephone){
    document.write(value.name+"님의 정보를 수정하겠습니다.</br>");
    document.write("수정 전:"+value.phone+"</br>");
    var rephone;
    value.phone = rephone;
    document.write("수정 후:"+value.phone+"</br></br>");
}

var edit_Date = function(value,redate){
    document.write(value.name+"님의 정보를 수정하겠습니다.</br>");
    document.write("수정 전:"+value.date+"</br>");
    var redate;
    value.date = redate;
    document.write("수정 후:"+value.date+"</br></br>");
}

var edit_people = function(value,repeople){
    document.write(value.name+"님의 정보를 수정하겠습니다.</br>");
    document.write("수정 전:"+value.people+"</br>");
    var repeople;
    value.people = repeple;
    document.write(value.people);
    document.write("수정 후:"+value.people+"</br></br>")
}

var edit_Seat = function(value,reseat){
    document.write(value.name+"님의 정보를 수정하겠습니다.</br>");
    document.write("수정 전:"+value.seat+"</br></br>");
    var reseat;
    value.seat = reseat;
    document.write(value.seat);
    document.write("수정 후:"+value.seat+"</br></br>");
}

var r_ksy = edit_Name(ksy,"김수현");
var r_psy = edit_Phone(psy,"01015556444");
r_ksy = edit_Date(ksy,"6월 27일");
