import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];

        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'userName') {
                    arr.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        todos: [
            { id: 1, text: '', done: true },
            { id: 2, text: '', done: false }
        ]
    },
    getter: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        addTodoItem(state, todoItem) {
            state.todoItems.push();
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        }
    }
})

// export const store = new Vuex.Store({
//     state: {
//         todoItems: storage.fetch()
//     }
// });