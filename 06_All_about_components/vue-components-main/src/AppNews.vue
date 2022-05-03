<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto perferendis, dolor doloribus rem mollitia.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: 'Item string',
      isOpen: false
    }
  }
}
</script>