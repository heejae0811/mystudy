<template>
  <div id="app">
      <todo-header></todo-header>

      <todo-input
        v-on:addItem="addOneItem"
      ></todo-input>

      <todo-list
        v-bind:propsdata="todoItems"
        v-on:removeItem="removeOneItem"
      ></todo-list>

      <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default ({
  name: 'Todo',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      localStorage.setItem(todoItem, todoItem);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    clearAllItem() {
      this.todoTimes = [];
      localStorage.clear();
    }
  }
});
</script>

<style>

</style>
