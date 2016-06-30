function fmt02(num) {
    if ( num < 10 ) {
        return "0" + num;
    }
    return num;
}
function update() {
    var now = new Date();
    document.getElementById("clockText").innerHTML =
        fmt02( now.getHours() ) + ":" + fmt02( now.getMinutes() );
}
update();
setInterval('update()',1000);