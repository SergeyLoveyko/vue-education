<template>
  <div class="card">
    <h3>{{ titleTwo }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto perferendis, dolor doloribus rem mollitia.</p>
  </div>
</template>

<script>
export default {
  props: ['titleTwo'],
  data() {
    return {
      item: 'Item string',
      isOpen: false
    }
  }
}
</script>