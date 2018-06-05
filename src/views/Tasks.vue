<template>
  <div>
    <h1>Tasks</h1>
    <ol>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tasks"])
  }
};
</script>
