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
    title: {
      type: String,
      required: true,  // можем установить, является ли 'title' обязательным параметром
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,  //  если параметр не обязательный, задаём дефолтный (ниже)
      default: false,
      validator(value) {
        console.log(value)
        // return false
        return value === true || value === false
      }
    }
  },
  data() {
    return {
      isOpenOld: false
    }
  }
}
</script>