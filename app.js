const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: ''
    }
  }
}

// const app = Vue.createApp(App);      //  Первый способ
// app.mount('#app');

Vue.createApp(App).mount('#app');       //  Второй способ