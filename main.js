"use strict"

function verify() {
  document.getElementById("creditimg").innerHTML=""
  let h=1;
  let value= document.getElementById("input").value
  const AE = /^(34|37)\d{13}$/  
  const VISA =/^4((\d{12}$)|(\d{15}$))/
  const MC =/^(5+[1-5])\d{14}$/
  const DISCOVER = /(^6011\d{12}$)|(^5\d{14}$)/
  const DC=/(^(30+[0-5])\d{11}$)|(^(36|38)\d{12}$)/
  const JCB=/(^(2131|1800)\d{11}$)|(^35\d{14}$)/
  if(AE.test(value)) {
    console.log("American Express")
    h="American Express"
  }
  else if(VISA.test(value)) {
    console.log("Visa")
    h="Visa"
  }
  else if(MC.test(value)) {
    console.log("MasterCard")
    h="MasterCard"
  }
  else if(DISCOVER.test(value)) {
    console.log("Discover")
    h="Discover"
  }
  else if(DC.test(value)) {
    console.log("Dines Club")
    h="Dines Club"
  }
  else if(JCB.test(value)) {
    console.log("JCB")
    h="JCB"
  }
  else {
    console.log("Not Valid")
    h="Not Valid";
  }
  
  if(h!="Not Valid") {
    const img = document.createElement("img");
    img.src="creditcard.png"
    document.getElementById("creditimg").appendChild(img)
  }

  const h2 = document.createElement("h2");
  h2.innerHTML=h
  h2.className="center"
  document.getElementById("creditimg").appendChild(h2)
}