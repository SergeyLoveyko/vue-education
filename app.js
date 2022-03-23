const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholder: 'Введите название заметки'
    }
  }
}

// const app = Vue.createApp(App);      //  Первый способ
// app.mount('#app');

Vue.createApp(App).mount('#app');       //  Второй способ