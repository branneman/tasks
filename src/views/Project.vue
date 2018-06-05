<template>
  <div>
    <h1>Project: {{ project.name }}</h1>
    <ol>
      <li v-for="task in projectTasks" :key="task.id">
        {{ task.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.getters.project(this.$route.params.id);
    },
    projectTasks() {
      return this.$store.getters.projectTasks(this.$route.params.id);
    }
  }
};
</script>
