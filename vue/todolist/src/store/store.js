/**
 * Vuex : 상태 관리 패턴 + 라이브러리, 중앙 집중식 저장소 역할
 * 저장소의 상태를 변경하는 유일한 방법은 commit을 이용한 변이
 *
 * Dispatch로 Action을 실행시킨 경우(), Action 에서는 비동기 로직을 처리한다. (백엔드 API를 받아온다.)
 * 이후 Commit으로 Mutation을 호출하면, Mutation에서는 동기 로직을 처리한다.
 * 이렇게 Mutate(변이)를 통해 State가 변경되고, Getter에 의해 Component에 데이터가 바인딩되고 view가 바뀐다.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// FIXME :: 미사용 로직은 제거한다.
/*const storage = {
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
}*/

export const store = new Vuex.Store({
    state: {
        // FIXME :: 스토리지에서 가져올 필요가 없다. persisted 가 알아서 매핑해준다.
        todoItems: [],
        modalVisible: false,
    },
    mutations: {
        // 변이에 대해 payload 라고 하는 추가 전달인자(매개변수, 파라미터)를 사용할 수 있다.
        addTodo(state, payload) {
            state.todoItems.push(payload);
        },
        removeTodo(state, payload) {
            // FIXME :: 변수를 만들 필요가 없다.
            state.todoItems.splice(
                state.todoItems.indexOf(payload),
                1
            );
        },
        completeTodo(state){
            state.todoItems.complete = !state.todoItems.complete
        },
        clearAllTodo(state) {
            state.todoItems = [];
            state.modalVisible = !state.modalVisible;
            // FIXME :: localStorage 를 직접 클리어 해줄 필요가 없다. 플러그인이 알아서 해준다
        },
        modalOpen(state) {
            state.modalVisible = !state.modalVisible;
        },
    },
    // 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 한다.
    actions: {
        // FIXME :: 객체 선언시 { 한칸씩 } 띄워준다.
        addTodoAction({ commit }, payload) {
            commit('addTodo', payload);
        },
        removeTodoAction({ commit }, payload) {
            commit('removeTodo', payload);
        },
        completeTodoAction({commit}, payload) {
            commit('completeTodo', payload);
        }
    },
    // FIXME :: 플러그인이 없으면 새로고침 할 때 마다 데이터가 바뀌는데 어떻게 수정해야할까?
    // FIXME :: 플러그인을 사용하면 된다.
    plugins: [createPersistedState()]
})
