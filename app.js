let clickbang = 0;
let rawr = 0;
function plus(){
    const audio = new Audio ("sound/kamunanya.mp3");
    audio.play()
    clickbang++
    document.getElementById("clickbang").innerHTML = "Kamu udah bertanya " + clickbang + " kali";
    document.getElementById("kamu-nanya").src = "2.jpg"
    audio.addEventListener("ended", function() {
        document.getElementById("kamu-nanya").src = "dilandiam.png"
    })
}
function clickrawr() {
    const audio = new Audio ("sound/rawr.mp3");
    audio.play()
    rawr++
    document.getElementById("rawr").innerHTML = "Kamu udah dikasih Rawr " + rawr + " kali";
    document.getElementById("kamu-nanya").src = "3.jpg"
    audio.addEventListener("ended", function() {
        document.getElementById("kamu-nanya").src = "dilandiam.png"
    })
}
function minus(){
    const audio = new Audio ("sound/entekadang.mp3");
    audio.play()
    clickbang--
    document.getElementById("clickbang").innerHTML = "Kamu udah bertanya " + clickbang + " kali";
    document.getElementById("kamu-nanya").src = "1.jpg"
}