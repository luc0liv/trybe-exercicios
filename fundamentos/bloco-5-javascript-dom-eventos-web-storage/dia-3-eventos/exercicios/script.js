function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const days = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const createListElement = document.createElement("li");
    let day = decemberDaysList[index];
    createListElement.innerHTML = day;

    if (day === 24 || day === 31) {
      createListElement.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18) {
      createListElement.className = "day friday";
    } else if (day === 25) {
      createListElement.className = "day holiday friday";
    } else {
      createListElement.className = "day";
    }

    days.appendChild(createListElement);
  }
}

createDaysOfTheMonth();

function createButton(query, string, id) {
  const getParent = document.querySelector(query);
  const newButton = document.createElement("button");
  newButton.innerText = string;
  newButton.id = id;
  getParent.append(newButton);
}

createButton(".buttons-container", "Feriados", "btn-holiday");

const holidayButton = document.querySelector("#btn-holiday");
const holidays = document.querySelectorAll(".holiday");

function changeHolidayColor() {
  let newColor = "pink";
  let oldColor = "rgb(238,238,238)";
  holidays.forEach((el) => {
    if (el.style.backgroundColor === newColor) {
        el.style.backgroundColor = oldColor;
    } else {
        el.style.backgroundColor = newColor;
    }
  });
}

holidayButton.addEventListener("click", changeHolidayColor);
