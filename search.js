var search_n = function(value){
    document.write(value.name+"님의 예약명은 "+value.name+"입니다. <br/>");
    }

var search_p = function(value){
    document.write(value.name+"님이 예약하신 연락처는 "+value.phone+"입니다. <br/>");
    }

var search_d = function(value){
    document.write(value.name+"님의 예약일은 "+value.date+"입니다. <br/>");
    }    

var search_np = function(value){
    document.write(value.name+"님의 예약 인원수는 "+value.people+"입니다. <br/>");
    } 
    
var search_s = function(value){
    document.write(value.name+"님의 좌석은 "+value.seat+"입니다. <br/>");
    }     

var search_e = function(value){
    document.write(value.name+"님이 예약하신 이메일은 "+value.email+"입니다. <br/>");
    } 
var list1 = search_np(psy);
var list2 = search_s(ksy);