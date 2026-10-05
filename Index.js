function showTime() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // Ajouter un 0 devant les valeurs inférieures à 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = h + ":" + m + ":" + s;

    const clock = document.getElementById("DigitalCLOCK");

    if (clock) {
        clock.textContent = time;
    }

    // Actualisation toutes les secondes
    setTimeout(showTime, 1000);
}

showTime();