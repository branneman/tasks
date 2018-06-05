export default {
  projects: state => {
    return state.projects;
  },
  project: state => id => {
    return state.projects.find(project => project.id === id);
  },
  projectTasks: state => id => {
    return state.projects.find(project => project.id === id).tasks;
  },
  tasks: state => {
    return state.tasks;
  },
  task: state => id => {
    return state.projects
      .reduce((prev, next) => prev.tasks.concat(next.tasks), { tasks: [] })
      .find(task => task.id === id);
  }
};
