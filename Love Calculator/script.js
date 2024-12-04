function calculateLove() {
    const name1 = document.getElementById("name1").value.trim()
    const name2 = document.getElementById("name2").value.trim()
    const loveResult = document.getElementById("result");
    const loverPercentage = Math.floor(Math.random() * 101);

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    }

    else {

        if (loverPercentage < 30) {
            loveResult.innerHTML += "<br> Not a Great Match. Keep looking! ";
        }
        else if (loverPercentage >= 30 && loverPercentage < 70) {
            loveResult.innerHTML += "<br> You two are a great match! You should try for a date! ";

        } else {
            loveResult.innerHTML += "<br> You two are a great match! You must try for a date! ";
        }
        loveResult.innerHTML = `${name1} and ${name2} are ${loverPercentage}% compatible with each other.`;
        console.log(calculateLove());
    }
}