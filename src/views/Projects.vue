<template>
  <div>
    <h1>Projects</h1>
    <ol>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/projects/${project.id}`">
          {{ project.name }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["projects"])
  }
};
</script>
