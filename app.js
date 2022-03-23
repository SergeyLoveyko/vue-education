const App = {
  data() {
    return {
      counter: 0,
      title: 'Счётчик'
    }
  }
}

// const app = Vue.createApp(App);      //  Первый способ
// app.mount('#app');

Vue.createApp(App).mount('#app');       //  Второй способ