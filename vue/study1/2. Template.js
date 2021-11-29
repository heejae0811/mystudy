class myCard extends HTMLElement {
    constructor() {
        super();
        let myCard = document.getElementById('my-card');
        let myCardConent = myCard.content;
        
        // 질문 : cloneNode?
        const shadowRoot = this.attachShadow({ mode: 'opoen' }).appendChild(myCardContent.cloneNode(true));
    }
}


class selectBox1 extends HTMLElement{
    constructor(){
        super();
        
        this.attachShadow({ mode: 'open' });

        // 질문 : a태그처럼 값을 다르게 넣어야 하는 경우, slot를 사용하는건 부적절한 것인가?
        this.shadowRoot.innerHTML = `
            <div class="select-box">
                <p class="label"><slot name="tit"></slot></p>
                <ul class="select-list">
                    <li><a href="#"><slot name="list"></slot></a></li>
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
    }
}

customElements.define('select-box1', selectBox1);


class selectBox2 extends HTMLElement{
    constructor(){
        super();
        
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = `
            <div class="select-box">
                <div class="select-list">
                    <slot name="tit1"></slot>
                </div>
                <div class="select-list">
                    <slot name="tit2"></slot>
                </div>
                <div class="select-list">
                    <slot name="tit3"></slot>
                </div>
            </div>

            <style>
                .select-box { width: 160px; margin: 10px 0 40px; border: 1px solid #bbb; box-sizing: border-box; }
                .select-box .select-list { display: block; height: 40px; color: #555; font-size: 14px; text-indent: 20px; line-height: 40px; letter-spacing: -0.35px; }
                .select-box .select-list:hover { background-color: #bbb; }
            </style>
        `;
    }
}

customElements.define('select-box2', selectBox2);