/**
 * Vuex
 * Dispatch로 Action을 발생시킨 경우, Action 에서는 비동기 로직을 처리한다. (백엔드 API를 받아온다.)
 * 이후 Commit으로 Mutation을 호출하면, Mutation에서는 동기 로직을 처리한다.
 * 이렇게 Mutate(변이)를 통해 State가 변경되고, Getter에 의해 Component에 데이터가 바인딩되고 view가 바뀐다.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];

        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
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
    },
    getter: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
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
})