let menuIcon = document.getElementById("menuIcon");
let navMenu = document.getElementById("navMenu");
menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

function submitForm(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    if(name == "" || number == ""){
        alert("Please fill all details 💪");
    } else {
        alert("Welcome to GetFit's Family, " + name + "! 🏋️ Our team will call you in 5 minutes!");
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
    }
}
// Close menu on link click
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});