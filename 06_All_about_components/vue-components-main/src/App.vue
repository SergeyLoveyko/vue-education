<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <div class="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
      <button class="btn" @click="isOpen = !isOpen">Открыть</button>
      <p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto perferendis, dolor doloribus rem mollitia.</p>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
