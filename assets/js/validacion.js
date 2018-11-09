function validacion() {
    var user = document.getElementById("user").value;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;

        if (user == null || user.length==0 || /^\+$/.test(user)) {
            alert("Error el campo debe de ser ..");
        return false;

    }
    return true;
}


