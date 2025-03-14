function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const color = document.getElementById("color").value;

    saveCookie("name", name);
    saveCookie("email", email);
    saveCookie("color", color);
    if (male) saveCookie("gender", "male");
    else if (female) saveCookie("gender", "female");
    var myWindow = window.open("output.html", "", "width=800,height=800");
    myWindow.focus();
}

function saveCookie(key, value) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3); 
    document.cookie = `${key}=${value};expires=${expireDate.toUTCString()};path=/`;
}