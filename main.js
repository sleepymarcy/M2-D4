let fname = []
let lname = []

let fnameInput = document.getElementById("fname")
let lnameInput = document.getElementById("lname")

let test1 = fnameInput.value
let test2 = lnameInput.value

let messageBox = document.getElementById("display")

function insert(){
    fname.push(fnameInput.value)
    lname.push(lnameInput.value)

    clearAndShow()

    console.log("insert")
}

function clearAndShow(){

    fnameInput.value = ""
    lnameInput.value = ""

    messageBox.innerHTML = "" + "<br/>"

    messageBox.innerHTML += "First name: " + fname.join(", ") + "<br/>"
    messageBox.innerHTML += "Last name: " + lname.join(", ") + "<br/>"

}
