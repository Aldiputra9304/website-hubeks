// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
  const myAlert = document.querySelector(".my-alert");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Display loading button, hide submit button
    btnLoading.classList.remove("d-none");
    btnKirim.classList.add("d-none");

    // Send data to Google Sheets using Google Apps Script
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw4pvbh3o_B0SGoQvtHpp5Vh_dhdbjRMfjWWozSxmHtKfr7-uwzmdz4KGVtAeueVkvRvg/exec", {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        // Hide loading button, display submit button
        btnLoading.classList.add("d-none");
        btnKirim.classList.remove("d-none");

        // Display success alert
        myAlert.classList.remove("d-none");
        myAlert.innerHTML = "Form submitted successfully!";

        // Hide the success alert after 3 seconds (adjust as needed)
        setTimeout(() => {
          myAlert.classList.add("d-none");
          myAlert.innerHTML = "";
        }, 3000);

        form.reset();
        console.log("Success!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error!", error.message);

      // Handle error and update the UI accordingly

      // Hide loading button, display submit button
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");
    }
  });
});
