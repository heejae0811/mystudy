<template>
    <div>
        <p>{{ counter }}</p>
        <button v-on:click="incrementCounter">버튼을 클릭하면 1씩 증가합니다.</button>
    </div>
</template>

<script>
export default {
    name: 'button-counter',
    props: {
        
    },
    /*
        data: {
            counter: 0
        },
        vue는 하나의 인스턴스 안에서 작업을 할 때 data를 함수형으로 변환하지 않아도 된다. (오류x)
        하지만 컴포넌트에서 data는 함수형으로 return 값을 통해 리터럴을 반환해야 한다.
        왜냐하면 각각의 다른 컴포넌트마다 각각의 데이터를 관리해야 하기 때문이다. (JS가 작동하는 방식으로 인해 모든 data 값을 참조하여 data 침범이 일어날 수 있기 때문이다.)
        return을 이용하면 각 컴포넌트마다 데이터를 분리하여 관리할 수 있다.
    */
    data(){
        return{
            counter: 0
        }
    },
    methods: {
        incrementCounter: function(){
            this.counter += 1
			this.$emit('increment', this.counter)
        }
    }
}
</script>