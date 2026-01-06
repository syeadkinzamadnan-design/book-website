window.onload = function () {
    console.log("Website loaded");
};

function openBook(bookName) {
    alert("📖 Opening Book:\n" + bookName + "\n\n(This is demo content)");
}

function validateLogin() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }
    alert("Welcome " + name + "!");
    return true;
}
