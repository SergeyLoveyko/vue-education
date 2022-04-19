const app = Vue.createApp({
  data() {
    return {
      title: 'Это из свойства template'
    }
  },
  template: `
    <div class="card center">
      <h1>{{ title }}</h1>
      <button class="btn">Изменить</button>
    </div>
    `
});

app.mount('#app');