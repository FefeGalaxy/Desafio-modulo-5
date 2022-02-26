export function initText (){
    class TextElement extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback(){
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "body";

            const style = document.createElement("style");
            style.textContent = `
                *{
                    box-sizing: border-box;
                }

                .body{
                    font-size: 40px;
                    font-family: 'Odibee Sans', cursive;;
                    text-align:center;
                }
            `;
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(style)

            const div = document.createElement("div")
            div.className = variant;
            div.textContent = this.textContent;

            shadow.appendChild(div);
            
        }
        
    }
    customElements.define("component-text", TextElement);
}
