document.getElementById("menu").onclick = function() {
    document.getElementById("sideBar").style.width="15rem";
};

document.getElementById("close").onclick = function() {
    document.getElementById("sideBar").style.width="0";
};

// Fungsi untuk membuka pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
