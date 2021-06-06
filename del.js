var del_e = function(value,in_phone){
    document.write("이메일 정보를 삭제하겠습니다. 이메일 대신 전화번호를 꼭 넣어주세요.</br>");
    delete value.email;
    value.phone = in_phone;
    document.write(value.name+"님의 전화번호를 입력하셨습니다.</br>");
    document.write(value.phone+"</br></br>");

}

var del_p = function(value,in_email){
    document.write("전화번호 정보를 삭제하겠습니다. 전화번호 대신 이메일을 꼭 넣어주세요.</br>");
    delete value.email;
    value.email = in_email;
    document.write(value.name+"님의 이메일을 입력하셨습니다.</br>");
    document.write(value.email+"</br></br>");

}

psy = del_e(psy,"01089456651");
ksy = del_p(ksy,"ksy@gmail.com");