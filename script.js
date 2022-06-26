const $formRadio = document.querySelector(".card1__form"),
    $parragraft = document.querySelector(".card2__paragraph1"),
    $Cquestion = document.querySelector(".card1"),
    $Cthanks = document.querySelector(".card2");

$formRadio.addEventListener("submit", function (e) {
    e.preventDefault();
    $Cthanks.style.transition = "transform 0.3s ease-in-out";
    $Cquestion.classList.add("hidden");
    $Cthanks.classList.add("show");
    $parragraft.innerHTML = "You selected " + document.querySelector('input[name="feedback"]:checked').value + " out of 5";
});