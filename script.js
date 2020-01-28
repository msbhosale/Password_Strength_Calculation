function validatePassword() {
    var password = document.getElementById("password").value;

    var message = "";
    var messageColor = "black";

    if (password == "") {
        message = "";
        messageColor = "black";
    } else if (password.length <= 5) {
        message = "Password strength is week";
        messageColor = "red";
    } else if (password.length > 5 && password.length <= 8) {
        message = "Password strength is medium";
        messageColor = "orange";
    } else if (password.length > 8) {
        message = "Password strength is strong";
        messageColor = "green";
    }

    document.getElementById("passwordMessage").innerHTML = message;
    document.getElementById("passwordMessage").style.color = messageColor;
}