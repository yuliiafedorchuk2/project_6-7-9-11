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