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

function createElement(kind, query, string, id, className) {
  const newElement = document.createElement(kind);
  const getParent = document.querySelector(query);
  newElement.innerText = string;
  newElement.id = id;
  newElement.className = className;
  return getParent.appendChild(newElement);
}

createElement("button", ".buttons-container", "Feriados", "btn-holiday");
createElement("button", ".buttons-container", "Sexta-feira", "btn-friday");

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

const fridayButton = document.querySelector("#btn-friday");
const fridays = document.querySelectorAll(".friday");

function getFridays() {
  let decemberFridays = [4, 11, 18, 25];
  let teste;
  for (let index in decemberFridays) {
    teste = decemberFridays[index];
    return teste;
  }
}

function changeFridays() {
  let newText = "Sextou";
  let decemberFridays = [4, 11, 18, 25];

  fridayButton.addEventListener("click", function() {
    for(let index = 0; index < fridays.length; index += 1) {
      if(fridays[index].innerText !== newText) {
        fridays[index].innerText = newText;
      } else {
        fridays[index].innerText = decemberFridays[index];
      }
    }
  })
}

changeFridays()


function zoomEffect() {
  const days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
  });
  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "16px";
  });
}

zoomEffect();

function createTask(task) {
  createElement("span", ".my-tasks", task);
}

createTask("Estudar ");
createTask("Dormir ");

function setColoredSubtitle(color) {
let parent = document.querySelector(".my-tasks");
let element = document.createElement("div");
element.className = "task";
element.style.backgroundColor = color;
parent.appendChild(element);
}

setColoredSubtitle('crimson');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener("click", function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}

setTaskClass();