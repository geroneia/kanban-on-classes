import Observer from "../utils/observer.js";

export default class Tasks extends Observer {
  constructor() {
    super();
    this._tasks = [];
  }

  setTasks(tasks) {
    this._tasks = tasks.slice();
  }

  getTasks() {
    return this._tasks;
  }

  updateTask(updateType, update) {
    // findIndex() возвращает индекс в массиве, если элемент удовлетворяет
  // условию проверяющей функции. В противном случае возвращается -1
    const index = this._tasks.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error(`Can't updateunexisting task`);
    }

    this._tasks = [
      ...this._tasks.slice(0, index),
      update,
      ...this._tasks.slice(index + 1)
    ];

    this._notify(updateType, updateType);
  }

  // Новая доббавляется в начало списка
  addTask(updateType, update) {
    this._tasks = [
      update,
      ...this._tasks
    ];

    this._notify(updateType, update);
  }

  deleteTask() {
    const index = this._tasks.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting task`);
    }

    this._tasks = [
      ...this._tasks.slice(0, index),
      ...this._tasks.slice(index + 1)
    ];

    this._notify(updateType);
  }
}