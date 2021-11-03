// 1. 커스텀 엘리먼트 생성
// 질문 : HTMLParagraphElement와 HTMLElement의 차이는 ? HTMLParagraphElement와 사용하면 super()에서 콘솔 오류가 생긴다.
// -> HTMLParagraphElement API는 더 이상 사용하지 않는다.
class PopUpInfo extends HTMLElement{
    constructor(){
        // 커스텀 엘리먼트 생성자는 super를 호출해 주어야 합니다.
        super();
        
        // 2. Shadow Root 생성
        // 질문 : mode는 open과 closed 2가지 뿐인가?
        // 질문 : closed 여도 결과 화면은 동일한데 변경하지 않을 값의 요소일 때만 사용하는 것인가? (closed를 언제 사용?)
        // -> closed 된 시점에서는 shadow root 내부에 접근할 수 없다. 루트는 접근이 되는데 내부 엘리먼트에 접근이 안된다.
        var shadow = this.attachShadow({ mode: 'open' });

        // 3. Shadow DOM 생성
        var wrapper = document.createElement('span');
        var icon = document.createElement('span');
        var info = document.createElement('span');

        wrapper.setAttribute('class', 'wrapper');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        info.setAttribute('class', 'info');

        var text = this.getAttribute('text');
        info.textContent = text;

        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/logo_on.png';
        }

        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // 4. Shadow DOM 스타일링
        var style = document.createElement('style');

        style.textContent = `
        .wrapper {
            position: relative;
        }

        .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;
        }

        img {
            width: auto;
        }

        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }`;
        
        // 5. Shodow Root에 연결
        // appendChild는 shadow root 하위에 엘리먼트 인스턴스를 추가하는 방식 (string이 아닌 인스턴스만 할당이 가능하다.)
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        shadow.appendChild(icon);
        shadow.appendChild(info);
    }
}

// 6. 커스텀 태그 등록
customElements.define('popup-info', PopUpInfo);


// 커스텀 태그 만들기 1
class selectBox1 extends HTMLElement{
    constructor(){
        super();
        
        this.attachShadow({ mode: 'open' });
        
        // innerHTML은 텍스트 상태의 엘리먼트를 추가하는 방식
        this.shadowRoot.innerHTML = `
            <div class="select-box">
                <p class="label">전체글</p>
                <ul class="select-list">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Case Study</a></li>
                    <li><a href="#">Trend</a></li>
                    <li><a href="#">Essay</a></li>
                </ul>
            </div>

            <style>
                .select-box { width: 160px; margin: 10px 0 40px; border: 1px solid #bbb; border-radius: 20px; box-sizing: border-box; }
                .select-box .label { color: #555; font-size: 14px; text-indent: 20px; line-height: 40px; letter-spacing: -0.35px; }
                .select-box .select-list li { background-color: #fff; transition: all 0.3s; }
                .select-box .select-list li:hover { background-color: #bbb; }
                .select-box .select-list li a { display: block; height: 40px; color: #555; font-size: 14px; text-indent: 20px; line-height: 40px; letter-spacing: -0.35px; }
            </style>
        `;

        // 질문 : Shodow Root 연결이 없어도 왜 되는가? innerHTML 때문인가?
        // -> 엘리먼트를 추가하는 메소드 : appendChild, outerHTML, innerHTML, 3가지 중에 1가지를 선택해서 사용하면 된다.
    }
}

customElements.define('select-box1', selectBox1);


// 커스텀 태그 만들기 2
class selectBox2 extends HTMLElement{
    constructor(){
        super();
        
        var shadow = this.attachShadow({ mode: 'open' });
        
        var selectBox = document.createElement('ul');
        var selectList = document.createElement('li');

        selectBox.setAttribute('class', 'select-box');
        selectList.setAttribute('class', 'select-list');

        var style = document.createElement('style');

        style.textContent = `
            .select-box { width: 160px; margin: 10px 0 40px; border: 1px solid #bbb; border-radius: 20px; box-sizing: border-box; }
            .select-box .label { color: #555; font-size: 14px; text-indent: 20px; line-height: 40px; letter-spacing: -0.35px; }
            .select-box .select-list li { background-color: #fff; transition: all 0.3s; }
            .select-box .select-list li:hover { background-color: #bbb; }
            .select-box .select-list li a { display: block; height: 40px; color: #555; font-size: 14px; text-indent: 20px; line-height: 40px; letter-spacing: -0.35px; }
        `;

        // 질문 : shadow 변수 대신에 this는 왜 안되는가? this의 범위가 어디인가?
        // -> shadow root 내부에 엘리먼트를 추가해야하기 때문이다. 루트에 appendChild를 해야한다.
        shadow.appendChild(selectBox);
        shadow.appendChild(selectList);
        shadow.appendChild(style);
    }
}

// 6. 커스텀 태그 등록
customElements.define('select-box2', selectBox2);