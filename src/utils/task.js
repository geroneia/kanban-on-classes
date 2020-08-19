// текущая дата
const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

// проверяет просрочена ли задача
export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  // если текущая дата позже сгенерированной - true
  return currentDate.getTime() > dueDate.getTime();
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

// берет из объекта с повтороми по дням есть/нет повтор, возвращает true/false
export const isTaskRepeating = (repeating) => Object.values(repeating).some(Boolean);

export const humanizeTaskDueDate = (dueDate) =>
  dueDate.toLocaleString(`en-US`, {
    day: `numeric`,
    month: `long`
  });