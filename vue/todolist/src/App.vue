<template>
  <div id="app">
    <div class="content">
      <todo-header></todo-header>

      <todo-modal></todo-modal>

      <todo-input></todo-input>

      <todo-order></todo-order>

      <todo-list></todo-list>

      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoModal from './components/TodoModal.vue';
import TodoInput from './components/TodoInput.vue';
import TodoOrder from './components/TodoOrder.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default ({
  name: 'Todo',
  components: {
    TodoHeader,
    TodoModal,
    TodoInput,
    TodoOrder,
    TodoList,
    TodoFooter
  },
});
</script>

<style>
@import './assets/css/common.css';

#app {
  width: 100%;
  height: 100%;
  background: rgb(238,174,202);
  background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

.content {
  width: auto;
  margin: 0 auto;
  padding: 0 5vw;
}
</style>
