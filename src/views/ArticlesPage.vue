<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Noticias</h1>
        <div v-if="loading">Loading!</div>
        <ul v-else>
          <li v-for="art in articles" :key="art.id">
            <a @click="onClick(art)">[{{ art.id }}] {{ art.title }}</a> |
            <a @click="remove(art)">Eliminar</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { articleAPI } from '@/api';

export default {
  name: 'ArticlesPage',
  data() {
    return {
      loading: true,
      articles: [],
    };
  },
  async created() {
    try {
      const articles = await this.fetchAll();
      // Set data
      this.articles = articles;
      this.loading = false;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
  methods: {
    onClick(object) {
      this.$router.push({ name: 'ArticlePage', params: { id: object.id } });
    },
    async remove(object) {
      try {
        this.loading = true;
        await articleAPI.deleteArticle(object.id);
      } catch (error) {
        const { data } = error.response;
        this.$store.dispatch('alert/danger', data.message);
      }
      try {
        const articles = await this.fetchAll();
        // Set data
        this.articles = articles;
        this.loading = false;
      } catch (error) {
        console.log('OOF');
      }
    },
    async fetchAll() {
      const response = await articleAPI.getAll();
      return response.data;
    },
  },
};
</script>
