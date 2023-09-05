function IconClick(icon,str) {
   // console.log("in fun")
    if (icon.className == "fa-solid fa-angles-down") {
        icon.className = "fa-solid fa-angles-up";
        document.getElementById(str).style.display = "block";
        console.log("in if")
    } else {
        icon.className = "fa-solid fa-angles-down";
        document.getElementById(str).style.display = "none";
        console.log("in else")
        console.log(str)
    }
}

function just_alert(){
    alert("Send")
}

