<template>
  <div>
    <div id="app">
      <h2>Vuex는 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소의 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있다.</h2>

      <ul>
        <li>Vuex store는 반응형이다. Vue 컴포넌트는 상태를 검색할 때 저장소의 상태가 변경되면 효율적으로 대응하고 업데이트 한다.</li>
        <li>저장소의 상태를 직접 변경할 수 없다. 저장소의 상태를 변경하는 유일한 방법은 커밋을 이용한 변이이다. 모든 상태에 추적이 가능한 기록을 남길 수 있다.</li>
      </ul>
      
      <br><br>

      <ol>
        <li>State : Vue component에서는 원본 소스 역할인 data로 볼 수 있다. state는 mutation을 통해서만 변경이 가능하다.</li>
        <li>Mutation : 유일하게 state를 변경할 수 있는 방법이며 메서드와 유사하다. commit을 통해서만 호출 할 수 있고, 함수로 구현된다.</li>
        <li>Actions : 비동기 작업이 가능하다. mutation을 호출하기 위한 commit이 가능하다. action은 dispatch를 통해 호출할 수 있다. <br>
            axios를 통한 api 호출과 그 결과에 대해 return을 하거나 mutation으로 commit하는 용도로 사용한다.
        </li>
        <li>Getter : Vue component의 computed처럼 계산된 속성입니다. state에 대한 연산을 하고 그 결과를 view에 바인딩 할 수 있다. state의 변경 여부에 따라 view를 업데이트 한다.</li>
      </ol>
    </div>

    <div id="example">
      <my-component></my-component>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
Vue.component('my-component', {
  template: '<div>사용자 정의 컴포넌트 입니다.</div>'
})

new Vue ({
  el: '#example'
  
})
/*
new Vue({
  el: '#app',
  // state : 컴포넌트 간에 공유할 data
  data() {
    return {
      counter: 0
    }
  },
  // view : 데이터가 표현될 template
  template: `
    <div>{{ counter }}</div>
  `,
  // actions : 사용자의 입력에 따라 반응할 methods
  methods: {
    increment() {
      this.counter++
    }
  }
})
*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
