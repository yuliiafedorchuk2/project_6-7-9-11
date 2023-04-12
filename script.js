document.getElementById("signInForm").addEventListener("submit",function(event) {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    
    if (!name || name.length < 4) {
        alert("Будь ласка введіть довше ім'я.");
        return;
    }
    
    if (!surname || surname.length < 4) {
        alert("Будь ласка введіть довше прізвище.");
        return;
    }
    
    if (!password || password.length <= 7) {
        alert("Будь ласка введіть правильний пароль, довжина якого має бути 8 або більше.");
        return;
    }
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" || surname === "" || email === "" || password === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Name: " + name + " " + surname + ", glad to see you!");

    console.log("Email: " + email);
    console.log("Password: " + password);
});