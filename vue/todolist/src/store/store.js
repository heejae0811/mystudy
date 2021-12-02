/**
 * Vuex : 상태 관리 패턴 + 라이브러리, 중앙 집중식 저장소 역할
 * 저장소의 상태를 변경하는 유일한 방법은 commit을 이용한 변이
 * 
 * Dispatch로 Action을 발생시킨 경우(), Action 에서는 비동기 로직을 처리한다. (백엔드 API를 받아온다.)
 * 이후 Commit으로 Mutation을 호출하면, Mutation에서는 동기 로직을 처리한다.
 * 이렇게 Mutate(변이)를 통해 State가 변경되고, Getter에 의해 Component에 데이터가 바인딩되고 view가 바뀐다.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i ++) {
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
    mutations: {
        // 변이에 대해 payload 라고 하는 추가 전달인자를 사용할 수 있다.
        addTodo(state, payload) {
            state.todoItems.push(payload);
            localStorage.setItem(JSON.stringify(state.todoItems), JSON.stringify(state.todoItems));
        },
        removeTodo(state, payload) {
            state.todoItems.splice(payload, 1);
        },
        clearAllTodo(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    },
    // 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 한다.
    actions: {
        addTodoAction({commit}, payload) {
            commit('addTodo', payload);
        }
    },
    // FIXME :: 플러그인이 없으면 새로고침 할 때 마다 데이터가 바뀌는데 어떻게 수정해야할까?
    plugins: [createPersistedState()]
})