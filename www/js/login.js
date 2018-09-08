var baseUrl = "localhost:8012"

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("continueBtn").addEventListener("click", function (c) {
        postJSON(baseUrl + "/login", function (res) {
            if (res.success) {
                window.localStorage.setItem("token", res.result.token);
                location.href = "index.html";
            }
            else {
                // show error
                console.log("wait something wrong");
            }
        })
    })
})

function getJSON(url, loaded) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            result = JSON.parse(xhr.responseText);
            loaded(result);
        }
        return;
    };
    xhr.send();
}

function postJSON(data, url, loaded) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            result = JSON.parse(xhr.responseText);
            loaded(result);
        }
        return;
    };
    xhr.send(JSON.stringify(data));
}