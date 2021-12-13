/**
 * Vuex : 상태 관리 패턴 + 라이브러리, 중앙 집중식 저장소 역할
 * 저장소의 상태(state)를 변경하는 유일한 방법은 commit을 이용한 변이
 *
 * Dispatch로 Action을 실행시킨 경우(), Action 에서는 비동기 로직을 처리한다. (백엔드 API를 받아온다.)
 * 이후 Commit으로 Mutation을 호출하면, Mutation에서는 동기 로직을 처리한다.
 * 이렇게 Mutate(변이)를 통해 State가 변경되고, Getter에 의해 Component에 데이터가 바인딩되고 view가 바뀐다.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: [],
        modalVisible: false,
    },
    mutations: {
        // 변이에 대해 payload 라고 하는 추가 전달인자(매개변수=파라미터)를 사용할 수 있다.
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
        // TODO :: 완료, 미완료 리스트 정렬하기
        completeTodo(state, payload) {
            let index = state.todoItems.indexOf(payload);

            state.todoItems[index].complete = !state.todoItems[index].complete;

            console.log(index);
        },
        selectCompleteTodo(state) {
            // TODO :: findIndex를 사용하면 되려나;;
            state.todoItems.filter(state.todoItems, state.todoItems.complete = true);
        },
        clearAllTodo(state) {
            state.todoItems = [];
            state.modalVisible = !state.modalVisible;
        },
        modalOpen(state) {
            state.modalVisible = !state.modalVisible;
        },
        // FIXME :: 콘솔에 배열이 찍히는데 왜 .sort가 안되는지 모르겠다..
        // 최신순 정렬
        sortTodoLatest(state) {
            let order = state.todoItems.map(item => '날짜' + item.date);
            console.log(order);

            order.sort(function (a, b) {
                return a - b; 
            });

            // let result = order.sort((a, b) => b[1] - a[1]);
            console.log('결과1', order);
        },
        // 오래된 순 정렬
        sortTodoOldest(state) {
            let order = state.todoItems.map(item => item.date);
            console.log(order);

            order.sort(function (a, b) {
                return b - a;
            });
            console.log('결과2', order);
        }
    },
    // 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 한다.
    actions: {
        addTodoAction({ commit }, payload) {
            commit('addTodo', payload);
        },
        removeTodoAction({ commit }, payload) {
            commit('removeTodo', payload);
        },
        completeTodoAction({commit}, payload) {
            commit('completeTodo', payload);
        },
        selectCompleteTodoAction({ commit }, payload) {
            commit('selectCompleteTodo', payload);
        }
    },
    // createPersistedState : state에 저장된 변수와 값을 localstorage에 업데이트 해준다. state와 localstorage를 지속적으로 동기화.
    plugins: [createPersistedState()]
})
