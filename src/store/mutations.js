export const STORAGE_KEY = "tasks-state";

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task);
  }
};
