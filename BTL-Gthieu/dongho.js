    window.onscroll = function () { myFunction() };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    console.log('sticky', sticky);
    function myFunction() {
        console.log('1')
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    function valicheck(){
        var email = document.getElementById("mail_text").value;
        var aCong = email.indexOf("@");
        var dauCham = email.lastIndexOf(".");
        if (email == "") {
        alert("Email không được để trống");
        return false;
        }
        else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
        alert("Email bạn điền không chính xác");
        return false;
        }
        else{
            alert('Nhập emali thành công.');
            return true;
        }
        
    }