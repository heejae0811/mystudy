/**
 * Vuex
 * Dispatch로 Action을 발생시킨 경우, Action 에서는 비동기 로직을 처리한다. (백엔드 API를 받아온다.)
 * 이후 Commit으로 Mutation을 호출하면, Mutation에서는 동기 로직을 처리한다.
 * 이렇게 Mutate(변이)를 통해 State가 변경되고, Getter에 의해 Component에 데이터가 바인딩되고 view가 바뀐다.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: [
            {
                id: 1,
                title: '할 일 1',
                content: '공부하기 싫다'
            },
            {
                id: 2,
                title: '할 일 2',
                content: '너무 어렵다'
            }
        ],
        newTodoItems: '',
        todoItems2: []
    },
    mutations: {
        addTodo(state) {
            localStorage.setItem(state.newTodoItems, state.newTodoItems);
            state.newTodoItems = '';
        },
        removeTodo(state, index) {
            state.todoItems.splice(index, 1);
        },
        clearAllTodo(state) {
            state.todoItems = [];
        }
    },
    action: function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i ++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems2.push(localStorage.key(i));
                }
            }
        }
    }
})