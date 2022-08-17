const boton = document.getElementById("button");

function funcioncita (){
    const restaurant = document.getElementById("inputsito").value;
    if (restaurant.length != 0 && restaurant != " ") {
        return window.location="https://www.sublimotionibiza.com/"
    } else {
        return false;
    }
}

boton.addEventListener(`click`, funcioncita);
