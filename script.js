

var str = document.body.innerHTML.toString();
var i = 0;
document.body.innerHTML = "";

setTimeout(function() {
    var se = setInterval(function() {
        i++;
        document.body.innerHTML = str.slice(0, i) + "_";
        if (i == str.length) {
            clearInterval(se);
            document.body.innerHTML = str;
        }
    }, 19);
});