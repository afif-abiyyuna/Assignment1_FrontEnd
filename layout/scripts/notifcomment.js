$(document).ready(function() {
    if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifcomment() {
    if (!Notification) {
    alert('Your Browser not support Web Notification.'); 
    return;
    }
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('HuntersPedia say : ', {
            icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88b6f848-7f22-44b7-a036-8e65d20a4e3d/dbfg98l-2859c4b1-575f-42e2-8180-b4dd1517a42e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODhiNmY4NDgtN2YyMi00NGI3LWEwMzYtOGU2NWQyMGE0ZTNkXC9kYmZnOThsLTI4NTljNGIxLTU3NWYtNDJlMi04MTgwLWI0ZGQxNTE3YTQyZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.RTDDQEcHb2RHxiDdgHnI-2h1Wk9IiUIg9Qp2aTvY8bQ',
            body: "comment have been updated :) ",
        });
            notification.onclick = function () {
            window.open("http://www.google.com");      
            };
        setTimeout(function(){
            notification.close();
        }, 5000);
    }
};
