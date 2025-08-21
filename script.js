// alert("Hello world"); - Alert Box 


// let name = "Racip";  // variable creation
// console.log(name);   // print statement

// let age = "18";
// console.log("Racip's age is " + age);


// function sayHello(){
//     alert("Hello");
// }

// let msg = document.getElementById("msg");



// function changeText(){
//     msg.innerText = "Text is changed";
    
// }

// console.log(msg);




// function applyDiscount() {
//   let priceText = document.getElementById("price").innerHTML;
//   let priceValue = Number(priceText.replace("Rs. ", ""));

//   let discountedPrice = priceValue - (priceValue * 0.10);

//   document.getElementById("price").innerHTML = "Rs. " + discountedPrice.toFixed(2);
// }


// let h1 = document.getElementById("h1");

// function change(){
//     // h1.style.backgroundColor = "red"
//     // h1.style.padding = "5px, 10px"
//     // h1.style.justifyContent = "flex-start";
//     // h1.style.scale
//     h1.style.display= "none";
// }

function setDarkTheme(){
    document.documentElement.style.setProperty('--bg-color', 'black',);
    document.documentElement.style.setProperty('--text-color', 'white',);

}

function setLightTheme(){
    document.documentElement.style.setProperty('--bg-color', 'white',);
    document.documentElement.style.setProperty('--text-color', 'black',);

}