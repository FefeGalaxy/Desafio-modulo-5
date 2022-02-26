const memeGanar = require("url:../../images/ganaste.jpg")

const memePerdi = require("url:../../images/perdiste.jpg")

export function initStar (){
    class Meme extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback(){
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant")
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            .contenedor{
                position: relative;
                display: inline-block;
                width: 100%;
            }
            
            
            .centrado{
                position: absolute;
                top: 50%;
                left: 50%;
            }
            `;
            var content = this.textContent

            var shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(style)

            var memes = ""
            if (variant == "gane"){
                memes = memeGanar
            }else{memes = memePerdi}

            var div = document.createElement("div")
            div.innerHTML = `<div class="contenedor">
            <img src=${memes } />
        
            <div class="centrado">${content}</div>
          </div>`
            
            
            
            

            shadow.appendChild(div)
            
        }
      }
      customElements.define('component-meme', Meme);}