let changeHeightValue = 0;

function increaseHeight(){
    let imgElement = document.getElementById("snorlax");
    changeHeightValue += 100;
    imgElement.style.height = changeHeightValue + "px";
}

function decreaseHeight(){
    let imgElement = document.getElementById("snorlax");
    changeHeightValue -= 100;
    imgElement.style.height = changeHeightValue + "px";
}