Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>
  `,
  data() {
    return {
      tasks: [
        { description: 'Go to the store', completed: true},
        { description: 'Finish tutorial', completed: false},
        { description: 'Cook food', completed: false},
        { description: 'Play games', completed: true},
        { description: 'Learn JS', completed: false},
      ]
    }
  }
})

Vue.component('task', {
  template: `<li><slot></slot></li>`
})

var app = new Vue ({
  el: '#app'
})