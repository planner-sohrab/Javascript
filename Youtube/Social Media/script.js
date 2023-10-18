let settingsmenu = document.querySelector(".settings-menu")
let darkBtn = document.getElementById("dark-btn")
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}



