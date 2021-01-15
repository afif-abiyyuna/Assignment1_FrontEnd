function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var subject = document.getElementById("subject").value;
    if (fname != "" && lname!= "" && subject != "") {
        return true;
    }else{
        alert('You must fill the data completely !');
    }
}