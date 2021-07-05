var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var course = document.getElementById("crs").value;
    var author = document.getElementById("ath").value;

    if (!name || !course || !author) {
        alert("fill all feilds");
        return;

    }
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = course;
    cell3.innerHTML = author;

    row++;
}