$(window).on("load", function(){
    console.log("Window has loaded");
    console.log("Loading scripts");
    loadScripts(0, function() {
        console.log("All scripts loaded");

        prepareCanvas("canvas");

        var obj = new PhysicsObject(1, 1, 1, 1.7, 1);
        obj.setObjectColor("red");
        obj.yAcceleration = 9.8;

        var allTime = 0.0;

        var intervalId = setInterval(function () {
            obj.updatePosition(allTime);
            
            drawBackground();
            obj.drawObject(context);

            allTime += 0.02;
        }, 20);
    });
});

var externalScripts = ["Conversion.js", "BaseObject.js", "PhysicsObject.js"];

var canvas;
var context;

function loadScripts(scriptId, callback)
{
    if(scriptId >= externalScripts.length) {
        callback();
        return;
    }
    $.getScript(externalScripts[scriptId], function(data, status, jqxhr) {
        if(jqxhr.status === 200) {
            console.log(externalScripts[scriptId] + " loaded");
        }
        else {
            console.log("The request for " + externalScripts[scriptId] + " ended with status code " + jqxhr.status);
        }
        loadScripts(scriptId + 1, callback);
    });
}

function prepareCanvas(canvasId) {
    canvas = $("#" + canvasId);
    $(canvas).width($(window).width()).height($(window).height());
    $(canvas)[0].width = $(canvas).width();
    $(canvas)[0].height = $(canvas).height();

    context = $(canvas)[0].getContext("2d");
}

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, $(canvas).width(), $(canvas).height());
}