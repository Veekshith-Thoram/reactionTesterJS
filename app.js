var timeTaken = document.querySelector("#time-taken");
var shape = document.querySelector("#shape");
var startTime = new Date().getTime;

function makeSHapeAppear() {
    var top = Math.random() * 400;
    var width = (Math.random() *200) +100;
    // var left = Math.random() * 400;
    shape.style.top = top + "px";
    shape.style.left = top + "px";
    if(Math.random() > 0.5){
        shape.style.borderRadius = "50%";
    }else{
        shape.style.borderRadius = "0";
    }
    shape.style.backgroundColor = randomColor();
    shape.style.width = top + "px";
    shape.style.height = top + "px";
    shape.style.display = "block";
    startTime = new Date().getTime;
}

function randomColor(){
    var letters = "0123456789ABCDEF".split('');
    var color="#"
    for(var i=0; i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function appearAfterDelay(){
    
    setTimeout(makeSHapeAppear, Math.random() * 2000);
}

appearAfterDelay();

shape.addEventListener("click", function () {
    shape.style.display = "none";
    var endTime = new Date().getTime;
    var timeTook = (endTime - startTime) / 1000;
    timeTaken.innerText = "The time taken is " + timeTook + "s"
    appearAfterDelay();
});