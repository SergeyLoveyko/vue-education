const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: ''
    }
  },
  methods: {
    inputChangeHandler() {
      this.inputValue = event.target.value;
    }
  }
}

// const app = Vue.createApp(App);      //  Первый способ
// app.mount('#app');

Vue.createApp(App).mount('#app');       //  Второй способ