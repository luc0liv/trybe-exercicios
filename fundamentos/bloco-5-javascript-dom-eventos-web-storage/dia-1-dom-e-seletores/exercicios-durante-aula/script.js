const header = document.querySelector("#header-container");
header.style.backgroundColor = "#008000";

const emergencyContainer = document.querySelectorAll(".emergency-tasks");
emergencyContainer.forEach(el => el.style.backgroundColor = "pink");

const emergencyTitleContainer = document.querySelectorAll(".emergency-tasks div h3");
emergencyTitleContainer.forEach(el => el.style.backgroundColor = "fuchsia");

const nonEmergencyContainer = document.querySelectorAll(".no-emergency-tasks");
nonEmergencyContainer.forEach(el => el.style.backgroundColor = "#F0E68C");

const nonEmergencyTitleContainer = document.querySelectorAll(".no-emergency-tasks div h3");
nonEmergencyTitleContainer.forEach(el => el.style.backgroundColor = "#1a1a1a");

const footerContainer = document.querySelectorAll("#footer-container");
footerContainer.forEach(el => el.style.backgroundColor = "#003300");