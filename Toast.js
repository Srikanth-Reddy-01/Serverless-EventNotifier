// Toast display function

// Load environment variables from the .env file
require('dotenv').config();

// Access the API key
const apiKey = process.env.API_KEY;

function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.background = type === "success" ? "green" : "red";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.zIndex = "1000";
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

// Submission handler
document.getElementById("eventForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const titleValue = this.title.value;
    const emailValue = this.email.value;
    const datetimeValue = this.datetime.value;

    // Optional debug
    console.log("Submitting: ", { titleValue, emailValue, datetimeValue });


    try {
        const response = await fetch("https://1h0v8d64qa.execute-api.ap-south-1.amazonaws.com/prod/addevent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify({
                title: titleValue,
                email: emailValue,
                datetime: datetimeValue
            })
        });

        const resText = await response.text();
        console.log("API response:", resText);

        if (response.ok) {
            showToast("Event/Task added successfully!", "success");
            this.reset();
        } else {
            showToast("Failed to add event/task. (" + resText + ")", "error");
        }
    } catch (error) {
        console.error("Error:", error);
        showToast("Error connecting to backend: " + error.message, "error");
    }
});