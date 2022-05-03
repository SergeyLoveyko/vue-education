<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Джо Байден победил на выборах в США',
          id: 1,
          isOpen: false
        },
        {
          title: 'Vue 3 успешно работает',
          id: 2,
          isOpen: false
        }
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
