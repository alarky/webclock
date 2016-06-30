$(document).ready(function() {
    // clock
    function fmt02(num) {
        return ("0" + num).slice(-2);
    }

    function update() {
        var now = new Date();
        document.getElementById("clockText").innerHTML =
            fmt02(now.getHours()) + ":" + fmt02(now.getMinutes());
    }

    update();
    setInterval(update, 1000);

    /*
    // canvas
    var canvas = document.createElement("canvas");
    //canvas.width = window.innerWidth / window.devicePixelRatio;
    //canvas.height = window.innerHeight / window.devicePixelRatio;
    canvas.classList.add("box");

    document.getElementById("container").appendChild(canvas);

    var context = canvas.getContext("2d");

    context.fillRect(0, 0, canvas.width, canvas.height);
    */
});