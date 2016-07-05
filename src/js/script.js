'use strict';

var m = require("mithril");

var fps = 30;

var webclock = {};

webclock.clockModel = function() {
    var self = this;
    self.now = m.prop();

    function fmt02(num) {
        return ("0" + num).slice(-2);
    }
    
    self.hours   = function() { return fmt02(self.now().getHours())   };
    self.minutes = function() { return fmt02(self.now().getMinutes()) };
};

webclock.controller = function() {
    var self = this;
    self.clock = new webclock.clockModel();

    var update = function() {
        self.clock.now(new Date);
        m.redraw();
    };
    update();
    setInterval(update, 1000/fps);
    
    console.log(self.clock);
};

webclock.view = function(ctrl) {

    var text = 
        ctrl.clock.hours() + ":" + 
        ctrl.clock.minutes();
    
    return m("span", text);
};

document.addEventListener('DOMContentLoaded', function() {
    m.mount(document.getElementById("clock"), webclock);
});

