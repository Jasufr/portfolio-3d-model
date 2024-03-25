export const SendMail = () => {
  const fromName = document.getElementById("name").value.trim();
  const emailIdInput = document.getElementById("email_id");
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailErrorMessage = document.querySelector(".emailError");
  const fillInError = document.querySelector(".fillInError");
  const successMessage = document.querySelector(".successMessage");

  const validateEmail = () => {
    const emailId = emailIdInput.value.trim();
    if (!emailRegex.test(emailId)) {
      // alert("Please enter a valid email address.");
      emailErrorMessage.classList.remove("hidden");
      // emailIdInput.focus();
    } else {
      emailErrorMessage.classList.add("hidden");
    }
  };

  emailIdInput.addEventListener("blur", validateEmail);

  const sendEmail = () => {
    if (fromName !== "" && emailIdInput.value.trim() !== "" && message !== "") {
    var params = {
      from_name: fromName,
      email_id: emailIdInput.value.trim(),
      message: message
    };

    emailjs.send("service_vxy5gyu", "template_alrs0u3", params)
      .then(function (res) {
        // alert("Success!" + res.status);
        // Reset input values after successful sending
        successMessage.classList.remove("hidden");
        fillInError.classList.add("hidden");
        document.getElementById("name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
      })
      .catch(function (error) {
        alert("An Error has occurred: " + error);
      });
    } else {
      // alert("Please fill in all the inputs.");
      fillInError.classList.remove("hidden");
    }
  };

  document.getElementById("sendButton").addEventListener("click", sendEmail);
};
