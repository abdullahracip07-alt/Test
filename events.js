
//First Option
// function changeText(){
//     document.getElementById('msg').innerHTML = "You clicked the button";
//     document.getElementById('msg').style.color = "red";
// }


//Scalable Option

// let msg = document.getElementById('msg')

// function changeText(){
//     msg.innerHTML = "You clicked the button";
//     msg.style.color = "red";
// }

//color changing

// document.getElementById("myInput").addEventListener('keyup', 
//     function() {
//     document.getElementById("output").innerHTML = this.value;
// });

//refers to the element that recieves event, in this case the input. therefore when the event is triggered by the input
//the output paragraph value is changed to the input value

document.getElementById("box")
.addEventListener('mouseover', function(){
    this.style.background = "green";
});

document.getElementById("box")
.addEventListener('mouseout', function(){
    this.style.background = "blue";
});


document.getElementById("text")
.addEventListener("dblclick", function(){
    this.style.color = "red";
    this.style.backgroundColor = "blue"
});

document.getElementById("dumm")
.addEventListener("hover", function(){
    this.style.transform = scale(1)
});

document.getElementById("email")
.addEventListener("focus", function(){
    this.style.border = "2px solid blue";
});

document.getElementById("email")
.addEventListener("blur", function(){
    this.style.border = "10px solid gray";
});