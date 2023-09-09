function e(e){return`
    <div class="row">              
     <div class="col-sm">
        <h1>${e.value}</h1>
     </div>
    </div>
    `}const t=document.querySelector("#site");[{type:"title",value:"Hello World from JS_site"},{type:"image",value:"./assets/fireball.jpeg"},{type:"text",value:"This is paragraff text"},{type:"columns",value:["111111111111","3333333333333","555555555555"]}].forEach(l=>{// console.log(block)
let i="";"title"===l.type?i=e(l):"text"===l.type?i=e(l):"columns"===l.type?i=function(e){let t=e.value.map(e=>`<div class="col-sm">${e}</div>`);return`
<div class="row">              
    ${t.join("")}       
</div>
    `}(l):"image"===l.type&&(i=`
    <div class="row">
    <img src="${l.value}"/>
    </div>
    `),t.insertAdjacentHTML("beforeend",i)});//# sourceMappingURL=index.a5a3999d.js.map

//# sourceMappingURL=index.a5a3999d.js.map
