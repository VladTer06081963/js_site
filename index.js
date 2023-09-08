const model = [
    {type: 'title', value: 'Hello World from JS_site'},
    {type: 'text', value: 'This is paragraff text'},
    {type: 'columns', value: [
        '111111111111',
        '222222222222',
        '3333333333333',
        '555555555555'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    // console.log(block)
    let html = ''
    if (block.type === 'title') {
html = title(block)
} else if(block.type === 'text') {
    html = title(block)
} else if(block.type === 'columns') {
html = columns(block)

}
$site.insertAdjacentHTML('beforeend', html)
}) 

function title(block) {
    return `
    <div class="row">              
     <div class="col-sm">
        <h1>${block.value}</h1>
     </div>
    </div>
    `
}

function text(block) {
    return `
    <div class="row">              
     <div class="col-sm">
        <h1>${block.value}</h1>
     </div>
    </div>
    `
}

function columns(block) {

const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
<div class="row">              
    ${html.join('')}       
</div>
    `
}

