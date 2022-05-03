<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpenOld = !isOpenOld">Открыть</button>
    <p v-if="isOpenOld">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto perferendis, dolor doloribus rem mollitia.</p>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: String,
    id: Number,
    isOpen: Boolean
  },
  data() {
    return {
      isOpenOld: false
    }
  }
}
</script>