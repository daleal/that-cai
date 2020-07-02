<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Noticia</h1>
        <div v-if="loading">Loading!</div>
        <div v-else>
          ID: {{ article.id }}<br>
          Título: {{ article.title }}<br>
          Contenido: {{ article.content }}
        </div>
    </div>
  </div>
</template>

<script>
import { articleAPI } from '@/api';

export default {
  name: 'ArticlePage',
  data() {
    return {
      loading: true,
      article: null,
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
      const response = await articleAPI.getArticle(this.id);
      const { data } = response;
      // Set data
      this.loading = false;
      this.article = data;
    } catch (error) {
      const { data } = error.response;
      this.$store.dispatch('alert/danger', data.message);
    }
  },
};
</script>
