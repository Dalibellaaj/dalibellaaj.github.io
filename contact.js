"use strict";

const form = document.getElementById("ajax-contact");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  fetch("https://api.admin.tik.website/feedbacks/notify", {
    method: "POST",
    redirect: "manual",
    credentials: "omit",
    refer: "",
    body: JSON.stringify({
      target: 'Contact Site',
      subject: "Feedback at " + location.hostname + location.pathname,
      from: form.email.value,
      name: form.nm.value,
      to: "dali@tik.tn",
      message: form.message.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    form.reset();
    form.querySelector(".contact-success").classList.add("shown");
    setTimeout(
        () => form.querySelector(".contact-success").classList.remove("shown"),
        3000
    );
  });
});
