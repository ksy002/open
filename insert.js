

var Insert = function(name, phone, date, people, seat,email){
    document.write("정보 중 이메일과 휴대폰 전화 중 하나를 선택하여 기입해 주세요.</br>");
    this.name = name;
    this.phone = phone;
    this.date = date;
    this.people = people;
    this.seat = seat;
    this.email = email;
    this.display = function(){
        document.write(this.name+"님 예약 완료 되었습니다. <br/><br/>");
    }
}


var psy = new Insert("박시연","" , "6월17일","6명","A-5","psy@naver.com");
psy.display();
var ksy = new Insert("김수연", "01012345678", "6월20일", "8명", "A-7","");
ksy.display();




