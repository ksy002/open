

var Insert = function(name, phone, date, people, seat){
    this.name = name;
    this.phone = phone;
    this.date = date;
    this.people = people;
    this.seat = seat;
    this.display = function(){
        document.write(this.name+"님 예약 완료 되었습니다. <br/><br/>");
    }
}


var psy = new Insert("박시연", "01087654321", "6월17일","6명","A-5");
psy.display();
var ksy = new Insert("김수연", "01012345678", "6월20일", "8명", "A-7");
ksy.display();




