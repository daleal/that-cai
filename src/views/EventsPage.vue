<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Eventos</h1>
        <div v-if="loading">Loading!</div>
        <ul v-else>
          <li v-for="evnt in events" :key="evnt.id">
            <a @click="onClick(evnt)">[{{ evnt.id }}] {{ evnt.name }}</a> |
            <a @click="remove(evnt)">Eliminar</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { eventAPI } from '@/api';

export default {
  name: 'EventsPage',
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  async created() {
    try {
      const events = await this.fetchAll();
      // Set data
      console.log(events);
      this.events = events;
      this.loading = false;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
  methods: {
    onClick(object) {
      this.$router.push({ name: 'EventPage', params: { id: object.id } });
    },
    async remove(object) {
      try {
        this.loading = true;
        await eventAPI.deleteEvent(object.id);
      } catch (error) {
        const { data } = error.response;
        this.$store.dispatch('alert/danger', data.message);
      }
      try {
        const events = await this.fetchAll();
        // Set data
        this.events = events;
        this.loading = false;
      } catch (error) {
        console.log('OOF');
      }
    },
    async fetchAll() {
      const response = await eventAPI.getAll();
      return response.data;
    },
  },
};
</script>
