<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Organización</h1>
        <div v-if="loading">Loading!</div>
        <div v-else>
          ID: {{ organization.id }}<br>
          Name: {{ organization.name }}<br>
          Description: {{ organization.description }}
        </div>
    </div>
  </div>
</template>

<script>
import { organizationAPI } from '@/api';

export default {
  name: 'OrganizationPage',
  data() {
    return {
      loading: true,
      organization: null,
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
      const response = await organizationAPI.getOrganization(this.id);
      const { data } = response;
      // Set data
      this.loading = false;
      this.organization = data;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
};
</script>
