const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 37']
    }
  },
  methods: {
    inputChangeHandler() {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    doubleCount() {
      console.log('doubleCount');
      return this.notes.length * 2;
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCount');
      return this.notes.length * 2;
    },
  }
}

// const app = Vue.createApp(App);      //  Первый способ
// app.mount('#app');

Vue.createApp(App).mount('#app');       //  Второй способ