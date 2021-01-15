(function() {     
    var i = 1;
    var classes = [ "bgd1", "bgd2", "bgd3", "bgd4", "bgd5", "bgd6", "bgd7" ]; 
    var el = document.getElementById('pageintro');  
    function toggle() {
        el.className = classes[i];        
        i = (i + 1) % classes.length; 
    }
    setInterval(toggle, 3000);
    })(); 