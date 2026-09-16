document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("ticketInquiryForm");
    const successMessage = document.getElementById("formSuccessMessage");

    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (event) => {
            // Prevent actual form delivery page reload
            event.preventDefault();

            // Fetch inputs to assemble a data payload
            const formData = {
                fullName: document.getElementById("fullName").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                email: document.getElementById("email").value.trim(),
                departure: document.getElementById("departure").value,
                destination: document.getElementById("destination").value,
                travelDate: document.getElementById("travelDate").value,
                passengers: document.getElementById("passengers").value
            };

            // Basic Validation Check to prevent matching stations
            if (formData.departure === formData.destination) {
                alert("Error: Departure station and Destination station cannot be the same location. Please adjust your itinerary.");
                return;
            }

            // Simulating API processing/dispatch execution
            console.log("Secure inquiry logged successfully:", formData);

            // Interface Transitions
            inquiryForm.classList.add("hidden");
            successMessage.classList.remove("hidden");

            // Smooth view alignment automatically focused on success container
            successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }
});
