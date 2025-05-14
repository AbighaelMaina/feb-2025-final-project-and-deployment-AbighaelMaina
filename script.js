// script.js

// Exercise Tracker
const exerciseForm = document.getElementById("exercise-form");
const exerciseList = document.getElementById("exercise-list");

// Load exercises
const loadExercises = () => {
  const exercises = JSON.parse(localStorage.getItem("exercises")) || [];
  exerciseList.innerHTML = exercises.map(ex => `<p>${ex.activity} - ${ex.duration} minutes, ${ex.calories} calories burned</p>`).join('');
};

// Add exercise
exerciseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const activity = document.getElementById("activity").value;
  const duration = document.getElementById("duration").value;
  const calories = document.getElementById("calories").value;

  const exercise = { activity, duration, calories };
  const exercises = JSON.parse(localStorage.getItem("exercises")) || [];
  exercises.push(exercise);
  localStorage.setItem("exercises", JSON.stringify(exercises));
  loadExercises();
  exerciseForm.reset();
});

// Sleep Tracker
const sleepForm = document.getElementById("sleep-form");
const sleepList = document.getElementById("sleep-list");

const loadSleep = () => {
  const sleepLogs = JSON.parse(localStorage.getItem("sleepLogs")) || [];
  sleepList.innerHTML = sleepLogs.map(log => `<p>Sleep from ${log.start} to ${log.end}</p>`).join('');
};

sleepForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const start = document.getElementById("sleep-start").value;
  const end = document.getElementById("sleep-end").value;

  const sleepLog = { start, end };
  const sleepLogs = JSON.parse(localStorage.getItem("sleepLogs")) || [];
  sleepLogs.push(sleepLog);
  localStorage.setItem("sleepLogs", JSON.stringify(sleepLogs));
  loadSleep();
  sleepForm.reset();
});

// Goals Tracker
const goalForm = document.getElementById("goal-form");
const goalList = document.getElementById("goal-list");

const loadGoals = () => {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goalList.innerHTML = goals.map(goal => `<p>${goal.name}: ${goal.target}</p>`).join('');
};

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("goal-name").value;
  const target = document.getElementById("goal-target").value;

  const goal = { name, target };
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
  loadGoals();
  goalForm.reset();
});

// Initial loads
loadExercises();
loadSleep();
loadGoals();
