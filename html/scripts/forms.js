
window.onload = function () {
    if (sessionStorage['userId'] != null) {
        window.location.replace("home.html");
    }
}

function getFormData(form) {
    var unindexed_array = form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n) {
        indexed_array[n["name"]] = n["value"];
    });

    return JSON.stringify(indexed_array);
}

function registerForm() {
    var formData = getFormData($("#registerForm"));
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/register",
        data: formData,
        dataType: "json",
        contentType: "application/json",
        success: function (res) {

            sessionStorage['userId'] = res.userId;
            sessionStorage['username'] = res.username;

            window.location.replace("home.html");
        },
        error: function (res) {
            document.getElementById("statusCode").innerText = "Username already taken!";

        }
    });
}

function loginForm() {
    var formData = getFormData($("#loginForm"));
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/login",
        data: formData,
        dataType: "json",
        contentType: "application/json",
        success: function (res) {

            sessionStorage['userId'] = res.userId;
            sessionStorage['username'] = res.username;

            window.location.replace("home.html");
        },
        error: function (res) {
            document.getElementById("statusCode").innerText = "Password or Username is incorrect!";

        }
    });
}