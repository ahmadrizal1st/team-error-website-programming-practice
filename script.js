// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the container where the form will be added
    const formContainer = document.getElementById("form-container");

    // Create a form element
    const form = document.createElement("form");
    form.setAttribute("id", "biodataForm");

    // Create a title for the form
    const title = document.createElement("h2");
    title.style.textAlign = "center";
    title.style.marginBottom = "20px";
    title.style.color = "#4CAF50";
    title.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    title.style.fontSize = "24px";
    title.style.textTransform = "uppercase";
    title.style.letterSpacing = "2px";
    title.textContent = "Biodata Form";
    form.appendChild(title);

    // Function to create input fields
    function createInputField(labelText, inputType, inputName) {
        const div = document.createElement("div");
        div.style.marginBottom = "10px";

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);
        div.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("type", inputType);
        input.setAttribute("name", inputName);
        input.setAttribute("id", inputName);
        input.style.marginLeft = "10px";
        div.appendChild(input);

        return div;
    }

    // Add input fields to the form
    form.appendChild(createInputField("Full Name:", "text", "fullName"));
    form.appendChild(createInputField("Email:", "email", "email"));
    form.appendChild(createInputField("Phone Number:", "tel", "phoneNumber"));
    form.appendChild(createInputField("Date of Birth:", "date", "dob"));

    // Create a submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // Append the form to the container
    formContainer.appendChild(form);

    // Add a submit event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const formData = new FormData(form);
        const biodata = {};
        formData.forEach((value, key) => {
            biodata[key] = value;
        });

        // Display the collected data
        alert(`Biodata Submitted:\n${JSON.stringify(biodata, null, 2)}`);
        console.log("Biodata Submitted:", biodata);

        // Clear the form
        form.reset();
    });
});