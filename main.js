let fname = []
let lname = []

let fnameInput = document.getElementById("fname").nodeValue
let lnameInput = document.getElementById("lname").nodeValue

let messageBox = document.getElementById("display")

function insert(){
    fname.push(fnameInput.nodeValue)
    lname.push(lnameInput.nodeValue)

    clearAndShow()
}

function clearAndShow(){

    fnameInput.nodeValue = ""
    lnameInput.nodeValue = ""

    messageBox.innerHTML = ""

    messageBox.innerHTML += "First name:" + fname.join(", ") + "<br/>"
    messageBox.innerHTML += "Last name:" + lname.join(", ") + "<br/>"
    
}
