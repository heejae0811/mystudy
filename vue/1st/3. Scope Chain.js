// Scope Chain : 현재 컨텍스트에서 액세스 할 수 없는 값에 대한 참조 체인이다.
// 전역변수
const name = "철수"
const age = 20
const city = "서울"

function getPersonInfo(){
    // 지역변수
    const name = "영희"
    const age = 10
    const pet = "강아지"

    // ${city}의 변수 값을 찾기 위해서 지역 scope를 벗어나 전역 scope를 참조한다.
    return `${name} is ${age} and lives in ${city}`
}

console.log(getPersonInfo());


const age = 21

function checkAge() {
	if (age < 21) {
		const message = "You cannot drink!"
		return message
	} else {
		const message = "You can drink!"
		return message
	}
}

console.log(checkAge());