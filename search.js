var search = function(value){
    document.write(value.name+"님의 예약목록입니다. <br/>");
    document.write("이름: "+value.name+"<br/>");
    document.write("연락처: "+value.phone+"<br/>");
    document.write("예약일: "+value.date+"<br/>");
    document.write("인원수: "+value.people+"<br/>");
    document.write("좌석: "+value.seat+"<br/><br/>");
    }

var list1 = search(psy);
var list2 = search(ksy);