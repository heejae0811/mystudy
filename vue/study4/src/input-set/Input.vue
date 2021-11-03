<template>
    <div>
        <div>
            <span>Input Text</span>
            <custom-input
                type="text"
                placeholder="텍스트를 입력해주세요."
                v-model="model1"
            ></custom-input>
            <p>
                vue는 기본적으로 v-model 이라는 양방향 데이터 바인딩 디렉티브를 제공한다.
                <i>{{ model1 }}</i>
            </p>
        </div>

        <div>
            <!-- type이 number일 경우, max-length는 적용이 안된다. -->
            <span>Input Number</span>
            <custom-input
                type="number"
                max-length="10"
            ></custom-input>
        </div>

        <div>
            <span>Input Password</span>
            <custom-input
                type="password"
                max-length="10"
            ></custom-input>
        </div>

        <div>
            <span>Input Email</span>
            <custom-input
                type="email"
            ></custom-input>
        </div>

        <br><br>

        <div>
            <span>Checkbox</span>
            <custom-checkbox
                v-model="model2"
                val="val 1"
                label="라벨 1"
            ></custom-checkbox>
            <custom-checkbox
                v-model="model2"
                val="val 2"
                label="라벨 2"
            ></custom-checkbox>
            <custom-checkbox
                v-model="model2"
                val="val 3"
                label="라벨 3"
            ></custom-checkbox>
            <p>{{ model2 }}</p>
        </div>

        <div>
            <span>Radio</span>
            <custom-radio
                id="model3"
                v-model="model3"
                val="여자"
                label="woman"
            ></custom-radio>
            <custom-radio
                id="model3"
                v-model="model3"
                val="남자"
                label="man"
            ></custom-radio>
            <p>{{ model3 }}</p>
        </div>

        <br>

        <p>
            props에 type을 정의하지 않거나 number로 선언 후 string로 작성해도 오류나 문제가 발생하지 않는다. <br>
            하지만 성능과 가독성, 협업을 위해서 type를 잘 정의해야 한다. <br>
            이후에 type script를 사용할 때도 도움이 된다.
        </p>

        <p>
            <strong>props:</strong> 상위 컴포넌트의 정보를 하위 컴포넌트로 전달한다. (단방향 데이터 바인딩) <br>
            <strong>emit:</strong> 다른 컴포넌트에게 이벤트를 전달하기 위해 사용한다. (단방향 데이터 바인딩)<br>
            예를 들어, 자식 컴포넌트에서 사용자 지정 이벤트를 만들어 부모 컴포넌트에게 전달한다. <br>
            부모 컴포넌트는 자식 컴포넌트에 만들어진 사용자 지정 이벤트를 받아 v-on 동작을 수행할 수 있다.
        </p>
    </div>
</template>

<script>
import CustomInput from '@/input-set/CustomInput.vue'
import CustomCheckbox from '@/input-set/CustomCheckbox.vue'
import CustomRadio from '@/input-set/CustomRadio.vue'

export default{
    name: 'Input',
    components: { CustomInput, CustomCheckbox, CustomRadio },
    data(){
        return{
            model1: '',
            model2: [],
            model3: []
        }
    }
}
</script>

<style scoped>
span { margin-right: 10px; }
input { outline: none; }
</style>