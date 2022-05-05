<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewOpen ? "Закрыть" : "Открыть" }}
    </button>
    <button class="btn danger" v-if="wasRead" @click="unmark">
      Отметить не прочитанное
    </button>
    <div v-if="isNewOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto
        perferendis, dolor doloribus rem mollitia.
      </p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true, // можем установить, является ли 'title' обязательным параметром
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false, //  если параметр не обязательный, задаём дефолтный (ниже)
      default: false,
      validator(value) {
        // console.log(value)
        // return false
        return value === true || value === false;
      },
    },
  },
  // emits: ['open-news'],    //  нужен для других разработчиков
  emits: {
    'open-news': null,      //  если не хотим валидировать
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
    // "open-news"(num) {
    //   if (num) {
    //     return true;
    //   }
    //   console.warn("No data in open-news emit");
    //   return false;
    // },
  },
  data() {
    return {
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {
        this.$emit("open-news"); //  Минимум 1 аргумент до бусконечности
      }
    },
    mark() {
      this.isNewOpen = false
      this.$emit('read-news', this.id)
    },
    unmark() {
      this.$emit('unmark', this.id)
    }
  },
};
</script>
