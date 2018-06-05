import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Tasks from "./views/Tasks.vue";
import Projects from "./views/Projects.vue";
import Project from "./views/Project.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Dashboard
    },
    {
      path: "/projects",
      component: Projects
    },
    {
      path: "/projects/:id",
      component: Project
    },
    {
      path: "/tasks",
      component: Tasks
    }
  ]
});
