const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      title: 'Это из свойства template'
    }
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <button class="btn" @click="title = 'Новое название!'">Изменить</button>
  //   </div>
  // `
  render() {
    return h('div', {
      class: 'card center'
    }, h('h1', {}, this.title));
  }
});

app.mount('#app');