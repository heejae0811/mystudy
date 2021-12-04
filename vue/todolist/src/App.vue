<template>
  <div id="app">
      <todo-header></todo-header>

      <todo-input></todo-input>

      <todo-order></todo-order>

      <todo-list></todo-list>

      <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoOrder from './components/TodoOrder.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default ({
  name: 'Todo',
  components: {
    TodoHeader,
    TodoInput,
    TodoOrder,
    TodoList,
    TodoFooter
  },
});
</script>

<style>

</style>
