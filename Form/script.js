document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;

    const foodChoices = [];
    if (document.getElementById("food1").checked)
      foodChoices.push(document.getElementById("food1").value);
    if (document.getElementById("food2").checked)
      foodChoices.push(document.getElementById("food2").value);
    if (document.getElementById("food3").checked)
      foodChoices.push(document.getElementById("food3").value);
    if (document.getElementById("food4").checked)
      foodChoices.push(document.getElementById("food4").value);
    if (document.getElementById("food5").checked)
      foodChoices.push(document.getElementById("food5").value);

    if (foodChoices.length < 2) {
      alert("Please select at least 2 food options.");
      return;
    }

    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${pincode}</td>
                <td>${gender}</td>
                <td>${foodChoices.join(", ")}</td>
                <td>${state}</td>
                <td>${country}</td>
            `;
    tableBody.appendChild(row);

    document.getElementById("dataForm").reset();
  });
