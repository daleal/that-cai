<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Evento</h1>
        <div v-if="loading">Loading!</div>
        <div v-else>
          ID: {{ event.id }}<br>
          Nombre: {{ event.name }}<br>
          Fecha y Hora: {{ event.dateAndTime }}<br>
          Categoría: {{ event.category }}<br>
          Ubicación: {{ event.location }}
        </div>
    </div>
  </div>
</template>

<script>
import { eventAPI } from '@/api';

export default {
  name: 'EventPage',
  data() {
    return {
      loading: true,
      event: null,
    };
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  async created() {
    try {
      const response = await eventAPI.getEvent(this.id);
      const { data } = response;
      // Set data
      this.loading = false;
      this.event = data;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
};
</script>
