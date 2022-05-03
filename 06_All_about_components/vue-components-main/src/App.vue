<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <app-news></app-news>
    <AppNews />
  </div>
</template>

<script>
import AppNews from './AppNews'
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        'Джо Байден победил на выборах в США',
        'Vue 3 успешно работает'
      ]
    }
  },
  components: {
    // 'app-news': AppNews
    // 'AppNews': AppNews
    AppNews: AppNews
  }
}
</script>

<style>

</style>
