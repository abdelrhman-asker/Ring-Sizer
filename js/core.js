var currentSize = 5;
var pexelUNIT   = 37.795275591;

$(".increase").click(function () {
    currentSize = Math.round((parseFloat(currentSize) + parseFloat(0.1)) * 10) / 10;
    // sizeInPexels = Math.round(parseFloat(currentSize) * parseFloat(pexelUNIT) * 10) / 10;
    $(".circle").css("width", currentSize + "cm");
    $(".circle").css("height", currentSize + "cm");
    $(".circle .cm").html(currentSize + " " + "cm");
});

$(".decrease").click(function () {
    currentSize = Math.round((parseFloat(currentSize) - parseFloat(0.1)) * 10) / 10;
    if(currentSize > 0) {
    // sizeInPexels = Math.round(parseFloat(currentSize) * parseFloat(pexelUNIT) * 10) / 10;
    $(".circle").css("width", currentSize + "cm");
    $(".circle").css("height", currentSize + "cm");
    $(".circle .cm").html(currentSize + " " + "cm");
    }
});

