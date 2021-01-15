function confirmation(){
    var konfirmasi = confirm("Are you sure you want to exit this page?");
    var text = "";
    
    if(konfirmasi === true) {
        text = "OK";
    }else{
        text = "Cancel";
    }
    
    document.getElementById("faico clear").innerHTML = text;
}