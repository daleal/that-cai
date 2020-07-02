<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Organizaciones</h1>
        <div v-if="loading">Loading!</div>
        <ul v-else>
          <li v-for="org in organizations" :key="org.id">
            <a @click="onClick(org)">[{{ org.id }}] {{ org.name }}</a> |
            <a @click="remove(org)">Eliminar</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { organizationAPI } from '@/api';

export default {
  name: 'OrganizationsPage',
  data() {
    return {
      loading: true,
      organizations: [],
    };
  },
  async created() {
    try {
      const organizations = await this.fetchAll();
      // Set data
      this.organizations = organizations;
      this.loading = false;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
  methods: {
    onClick(object) {
      this.$router.push({ name: 'OrganizationPage', params: { id: object.id } });
    },
    async remove(object) {
      try {
        this.loading = true;
        await organizationAPI.deleteOrganization(object.id);
      } catch (error) {
        const { data } = error.response;
        this.$store.dispatch('alert/danger', data.message);
      }
      try {
        const organizations = await this.fetchAll();
        // Set data
        this.organizations = organizations;
        this.loading = false;
      } catch (error) {
        console.log('OOF');
      }
    },
    async fetchAll() {
      const response = await organizationAPI.getAll();
      return response.data;
    },
  },
};
</script>
