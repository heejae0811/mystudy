<template>
  <div>
    <div>
      <h2>뷰의 라이프 사이클(생명주기)</h2>
      <p>
        생성 > 실행 > 종료 > 파괴 <br>
        $의 의미 : 실제 DOM
      </p>
    </div>

    <div>
      <h2>라이프 사이클 훅</h2>
      <p>
        라이프 사이클 중간에 코드를 삽입할 수 있는 기능 <br>  
        뷰에서는 7가지의 라이프 사이클 훅을 이용할 수 있다.
      </p>
      <ol>
        <li>beforeCreate : 뷰 인스턴스가 생성되고 속성 정의가 안된 단계, <b>많이 사용한다.</b></li>
        <li>created : data, method 속성이 정의되고(초기화), template 속성에 정의된 dom 요소 접근 불가한 단계</li>
        <li>beforeMount : render() 함수 호출 직전의 단계</li>
        <li>mounted : el 속성에 화면 요소가 호출되는 단계, <b>모든 랜더링이 끝난 상태</b> 실제 dom에 virtual dom 랜더링이 끝난 상태, console.log 확인이 가능하다.</li>
        <li>beforeUpdate : data 관찰 단계</li>
        <li>updated : data 변경 후 virtual dom으로 다시 화면을 호출한 단계 ex) 버튼을 클릭하면 숫자 증가</li>
        <li>beforeDstory : 뷰 인스턴스의 데이터를 삭제하기 좋은 단계</li>
        <li>destoryed : 뷰 인스턴스 소멸 단계 ex) 컴포넌트 교체</li>
      </ol>
    </div>

    <div>
      <h2>ES5 / ES6</h2>
      <strong>ES5와 ES6는 scope의 차이이다.</strong>
      <p>
        <i>ES5 (뷰의 권장사항)</i>
        a:function() { function 안의 this의 scope를 갖는다. } <br>
      </p>
      <p>
        <i>ES6</i>
        a:() => { class 인스턴스 안의 scope를 갖는다. 동기식 함수에는 화살표 함수를 사용한다.}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div > div { margin-bottom: 50px; }
ol > li { margin-bottom: 10px; }
i { display: block; }
p { margin-bottom: 10px; }
</style>
