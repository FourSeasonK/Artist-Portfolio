let arr = [];

function calArray(){
  let userEntry = document.getElementById("number").value;
  document.getElementById("number").value = "";
  console.log(userEntry);
  let n = 0;
  if(userEntry == ""){
    alert("The value can't be blank");
  }
  else{
    arr.push(userEntry);
    document.getElementById("result1").innerHTML ="";
    for(let i = 0; i < arr.length; i++){
      let price = arr[i] * 30.00; 
      let pnumber = arr[i];
      document.getElementById("result1").innerHTML +=  pnumber + " " + "people" + " " + "$" + price.toFixed(2) + "<br>";
    }
  }
}


function calArrdisplay(){
  arr = [];
  document.getElementById("result1").innerHTML = "";
}



function submitInformation(){
  userEntry = true;
 

    let name = document.getElementById("flname").value;
    let number = document.getElementById("pnumber").value;
    let email = document.getElementById("remail").value;
    let wclass = document.querySelector("#select").value; 
    console.log(number);
    console.log(name);
    console.log(email);
    
    document.querySelector("#display").innerHTML = "";

    if(name == ""){
        userEntry = false;
       document.getElementById("flname").style.borderColor = "red";
       alert("The namae value must not be blank");
 
    }
    if(number == ""){
        userEntry = false;
        
       
        document.getElementById("pnumber").style.borderColor = "red";
        alert("The phone number value must not be blank");
    }
    if(email == ""){
        userEntry = false;
       

        document.getElementById("remail").style.borderColor = "red";
        alert("The email value must not be blank");
    }

    if(wclass == ""){
      document.getElementById("select").style.borderColor = "red";
      alert("The class value must not be blank");
    }

    if(userEntry){
        document.querySelector("#display").innerHTML = "";

        document.querySelector("#display").innerHTML = "Submission received";
        document.querySelector("#display").style.color = "red"
        document.getElementById("select").style.borderColor =  "black";
        document.getElementById("flname").style.borderColor = "black";
        document.getElementById("pnumber").style.borderColor =  "black";
        document.getElementById("remail").style.borderColor =  "black";
      
        document.getElementById("flname").value = "";
        document.getElementById("pnumber").value = "";
        document.getElementById("remail").value = "";
        document.querySelector("#titleoption").value = "";
        document.querySelector("#people").value = "1";
        document.querySelector("#date").value = "";
        document.querySelector("#select").value = "";
        document.querySelector("#oyes").checked = false;
        document.querySelector("#ono").checked = false;
        document.querySelector("#comments").value = "";
        
    }
    
}


function resetInfor(){
  document.getElementById("flname").value = "";
  document.getElementById("pnumber").value = "";
  document.getElementById("remail").value = "";
  document.querySelector("#titleoption").value = "";
  document.querySelector("#people").value = "1";
  document.querySelector("#date").value = "";
  document.querySelector("#select").value = "";
  document.querySelector("#oyes").checked = false;
  document.querySelector("#ono").checked = false;
  document.querySelector("#comments").value = "";


  document.getElementById("flname").style.borderColor = "black";
  document.getElementById("pnumber").style.borderColor =  "black";
  document.getElementById("remail").style.borderColor =  "black";
  document.getElementById("select").style.borderColor =  "black";
  document.querySelector("#display").innerHTML = "";
}
