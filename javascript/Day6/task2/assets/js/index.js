var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var users = JSON.parse(xhr.responseText);
        var tableBody = document.getElementById("table");
        tableBody.innerHTML = "";
        users.forEach(function (user) {
            var row = document.createElement("tr");
            var idCell = document.createElement("td");
            idCell.textContent = user.id;
            row.appendChild(idCell);
            var nameCell = document.createElement("td");
            nameCell.textContent = user.name;
            row.appendChild(nameCell);
            var emailCell = document.createElement("td");
            emailCell.textContent = user.email;
            row.appendChild(emailCell);
            tableBody.appendChild(row);
            var actionCell = document.createElement("td");
            actionCell.innerHTML = `<button class="btnDelete" onclick="showDetails(${user.id})">View More</button>`;
            row.appendChild(actionCell);

            tableBody.appendChild(row);
        });
    }
};
// detail.addEventListener('click' , showDetails )
function showDetails(userId) {
    var div = document.getElementById("div");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);

    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                response = JSON.parse(xhr.response);
            }
        }
        div.innerHTML = `
    <p>ID is ${response.id}</p>
    <p>Name is ${response.name}</p>
    <p>Email is ${response.email}</p>
    <p>Phone is ${response.phone}</p>
    <p>Website is ${response.website}</p>
`;
    };
}
