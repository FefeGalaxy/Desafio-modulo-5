const memeGanar = require("url:../../images/ganaste.jpg")

const memeEmpate = require("url:../../images/empate.jpg")

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

            .memecito{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            `;
            var content = this.textContent

            var shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(style)

            var memes = ""
            if (variant == "win"){
                memes = memeGanar
            }else if (variant == "loose"){
                memes = memePerdi
            } else {memes = memeEmpate}


            var div = document.createElement("div")
            div.innerHTML = `<div class="contenedor">

            <div class="memecito">
            
            <img src=${memes } />

            </div>
        
            <div class="centrado">${content}</div>
          </div>`
            
            
            
            

            shadow.appendChild(div)
            
        }
      }
      customElements.define('component-meme', Meme);}