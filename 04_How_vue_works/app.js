const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      title: 'Это из свойства template'
    }
  },
  methods: {
    changeTitle() {
      console.log(this);
      this.title = 'Изменили!'
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
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'Изменить')]);
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  }
});

app.mount('#app');

// setTimeout(() => {
//   app.unmount();
// }, 2000);


//  ===========


let title = 'Vue3';
let message = 'Заголовок это: ' + title;
// console.log(message);
// console.log(title);

// console.log('----------------');

// title = 'Angular 10';
// console.log(message);
// console.log(title);

const data = {
  title: 'Vue3',
  message: 'Заголовок это: ' + title
}

// console.log(data);

const proxy = new Proxy(data, {
  // get(target, p) {
  //   console.log(target);
  //   console.log(p);
  // },
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);

    if (key === 'title') {
      target.massage = 'Заголовок это: ' + value;
    } 
    target[key] = value;
  }
});

proxy.title = 'Angular 10';
// console.log(proxy);