document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("form-container");

    // Create form
    const form = document.createElement("form");
    form.id = "biodataForm";
    form.style.maxWidth = "400px";
    form.style.margin = "auto";
    form.style.padding = "20px";
    form.style.border = "1px solid #ccc";
    form.style.borderRadius = "8px";
    form.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    form.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    // Create form title
    const title = document.createElement("h2");
    title.textContent = "Biodata Form";
    title.style.textAlign = "center";
    title.style.marginBottom = "20px";
    title.style.color = "#4CAF50";
    title.style.fontSize = "24px";
    title.style.textTransform = "uppercase";
    title.style.letterSpacing = "1.5px";
    form.appendChild(title);

    /**
     * Helper function to create input fields
     */
    const createInputField = (labelText, inputType, inputName) => {
        const fieldWrapper = document.createElement("div");
        fieldWrapper.style.marginBottom = "15px";
        fieldWrapper.style.display = "flex";
        fieldWrapper.style.flexDirection = "column";

        const label = document.createElement("label");
        label.setAttribute("for", inputName);
        label.textContent = labelText;
        label.style.marginBottom = "5px";
        label.style.fontWeight = "bold";

        const input = document.createElement("input");
        input.type = inputType;
        input.name = inputName;
        input.id = inputName;
        input.required = true;
        input.style.padding = "8px";
        input.style.border = "1px solid #ccc";
        input.style.borderRadius = "4px";

        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);

        return fieldWrapper;
    };

    // Add input fields
    const fields = [
        { label: "Full Name", type: "text", name: "fullName" },
        { label: "Email", type: "email", name: "email" },
        { label: "Phone Number", type: "tel", name: "phoneNumber" },
        { label: "Date of Birth", type: "date", name: "dob" }
    ];

    fields.forEach(field =>
        form.appendChild(createInputField(field.label, field.type, field.name))
    );

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.style.padding = "10px";
    submitButton.style.width = "100%";
    submitButton.style.marginTop = "10px";
    submitButton.style.backgroundColor = "#4CAF50";
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "4px";
    submitButton.style.fontSize = "16px";
    submitButton.style.cursor = "pointer";

    submitButton.addEventListener("mouseover", () => {
        submitButton.style.backgroundColor = "#45a049";
    });

    submitButton.addEventListener("mouseout", () => {
        submitButton.style.backgroundColor = "#4CAF50";
    });

    form.appendChild(submitButton);
    formContainer.appendChild(form);

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const biodata = Object.fromEntries(formData.entries());

        alert(`Biodata Submitted:\n${JSON.stringify(biodata, null, 2)}`);
        console.log("Biodata Submitted:", biodata);

        form.reset();
    });
});
