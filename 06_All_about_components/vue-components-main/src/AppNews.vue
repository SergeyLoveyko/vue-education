<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <p v-if="isNewOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto perferendis, dolor doloribus rem mollitia.</p>
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
        // console.log(value)
        // return false
        return value === true || value === false
      }
    }
  },
  // emits: ['open-news'],    //  нужен для других разработчиков
  emits: {
    // 'open-news': null      //  если не хотим валидировать
    'open-news'(num) {
      if (num) {
        return true
      }
      console.warn('No data in open-news emit')
      return false
    }
  },
  data() {
    return {
      isNewOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen
      if(this.isNewOpen) {
        this.$emit('open-news')      //  Минимум 1 аргумент до бусконечности
      }
    }
  }
}
</script>