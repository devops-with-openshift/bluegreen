/**
 * Created by mike on 15/08/15.
 */


function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<canvas id="myCanvas" width="578" height="200"></canvas>'+
        '<script>'+
        'var canvas = document.getElementById("myCanvas");'+
        'var context = canvas.getContext("2d");'+
        'var centerX = canvas.width / 2;'+
        'var centerY = canvas.height / 2;'+
        'var radius = 70;'+
        'context.beginPath();'+
        'context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);'+
        'context.fillStyle = "green";'+
        'context.fill();'+
        'context.lineWidth = 5;'+
        'context.strokeStyle = "#003300";'+
        'context.stroke();'+
        '</script>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.start = start;
