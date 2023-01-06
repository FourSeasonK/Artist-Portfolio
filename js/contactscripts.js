function submitInformation(){
    userEntry = true;
 
    var errorm = "";
    let name = document.getElementById("flname").value;
    let number = document.getElementById("pnumber").value;
    let email = document.getElementById("remail").value;

    console.log(number);
    console.log(name);
    console.log(email);
    
    document.querySelector("#display").innerHTML = "";

    if(name == ""){
        userEntry = false;
       
   
       document.getElementById("flname").style.borderColor = "red";
       document.querySelector("#display").innerHTML += "*The name value must not be blank" + "<br>";
       document.querySelector("#display").style.color = "red";

    }
    if(number == ""){
        userEntry = false;
        
       
        document.getElementById("pnumber").style.borderColor = "red";
        document.querySelector("#display").innerHTML += "*The phone number value must not be blank"+ "<br>";
        document.querySelector("#display").style.color = "red";

    }
    if(email == ""){
        userEntry = false;
       

        document.getElementById("remail").style.borderColor = "red";
         document.querySelector("#display").innerHTML += "*The email value must not be blank"+ "<br>";
         document.querySelector("#display").style.color = "red";

    }

    if(userEntry){

        document.querySelector("#display").innerHTML = "";
        alert("Submission received");
        document.getElementById("flname").style.borderColor = "black";
        document.getElementById("pnumber").style.borderColor =  "black";
        document.getElementById("remail").style.borderColor =  "black";
         
        document.getElementById("flname").value = "";
        document.getElementById("pnumber").value = "";
        document.getElementById("remail").value = "";
        document.querySelector("#buyingart").checked = false;
        document.querySelector("#exhibition").checked = false;
        document.querySelector("#performance").checked = false;
        document.querySelector("#others").value = "";
        document.querySelector("#comments").value = ""; 

    }
  
    /* document.getElementById("flname").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("remail").value = "";
    document.querySelector("#buyingart").checked = false;
    document.querySelector("#exhibition").checked = false;
    document.querySelector("#performance").checked = false;
    document.querySelector("#others").value = "";
    document.querySelector("#comments").value = ""; */


    
}

function resetInfor(){
    document.getElementById("flname").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("remail").value = "";
    document.querySelector("#buyingart").checked = false;
    document.querySelector("#exhibition").checked = false;
    document.querySelector("#performance").checked = false;
    document.querySelector("#others").value = "";
    document.querySelector("#comments").value = "";
    document.getElementById("flname").style.borderColor = "black";
    document.getElementById("pnumber").style.borderColor =  "black";
    document.getElementById("remail").style.borderColor =  "black";
    document.querySelector("#display").innerHTML = "";
  }